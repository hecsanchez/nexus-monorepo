import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import {
  Client,
  User,
  Department,
  WorkflowStatus,
  DocumentType,
  PrismaClient,
} from '@prisma/client';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { AssignSEDto } from './dto/assign-se.dto';

const DEFAULT_PIPELINE_STEPS = [
  'Discovery: Initial Survey',
  'Discovery: Process Deep Dive',
  'ADA Proposal Sent',
  'ADA Proposal Review',
  'ADA Contract Sent',
  'ADA Contract Signed',
  'Credentials Collected',
  'Factory Build Initiated',
  'Test Plan Generated',
  'Testing Started',
  'Production Deploy',
];

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return this.prisma.$transaction(async (prisma: PrismaClient) => {
      // 1. Create the client and departments
      const client = await prisma.client.create({
        data: {
          name: createClientDto.name,
          url: createClientDto.url,
          contractStart: createClientDto.contractStart,
          contractEnd: createClientDto.contractEnd,
          active: true,
          departments: createClientDto.departments
            ? {
                create: createClientDto.departments.map((d) => ({
                  name: d.name,
                })),
              }
            : undefined,
        },
        include: { departments: true },
      });

      // 1b. Create empty document links for each DocumentType
      const docTypes = Object.values(DocumentType);
      for (const type of docTypes) {
        await prisma.documentLink.create({
          data: {
            clientId: client.id,
            type,
            url: '',
          },
        });
      }

      // 1c. Create pipeline steps
      for (let i = 0; i < DEFAULT_PIPELINE_STEPS.length; i++) {
        await prisma.pipelineStep.create({
          data: {
            clientId: client.id,
            label: DEFAULT_PIPELINE_STEPS[i],
            order: i + 1,
            completedAt: null,
          },
        });
      }

      // 2. Map department names to IDs
      const deptMap = new Map<string, string>();
      for (const dept of client.departments) {
        deptMap.set(dept.name, dept.id);
      }

      // 3. Create users with correct departmentId
      if (createClientDto.users && createClientDto.users.length > 0) {
        for (const u of createClientDto.users) {
          const departmentId = deptMap.get(u.department);
          await prisma.clientUser.create({
            data: {
              client: {
                connect: {
                  id: client.id,
                },
              },
              user: {
                connectOrCreate: {
                  where: { email: u.email },
                  create: {
                    name: u.name,
                    email: u.email,
                    phone: u.phone,
                    role: 'CLIENT',
                    password: 'changeme',
                  },
                },
              },
              isAdmin: u.access?.admin ?? false,
              canBilling: u.access?.billing ?? false,
              notes: '',
              department: {
                connect: {
                  id: departmentId,
                },
              },
            },
          });
        }
      }

      // 4. Create assigned SEs
      if (
        createClientDto.assignedSEs &&
        createClientDto.assignedSEs.length > 0
      ) {
        for (const se of createClientDto.assignedSEs) {
          await prisma.clientsOnSEs.create({
            data: {
              clientId: client.id,
              seId: se.seId,
            },
          });
        }
      }

      // 5. Return the full client with relations
      return prisma.client.findUnique({
        where: { id: client.id },
        include: {
          departments: true,
          users: { include: { user: true } },
          assignedSEs: { include: { se: true } },
        },
      });
    });
  }

  async findAll(): Promise<any[]> {
    const clients = await this.prisma.client.findMany({
      select: {
        id: true,
        name: true,
        url: true,
        contractStart: true,
        users: {
          select: {
            user: { select: { name: true } },
          },
        },
        workflows: {
          select: {
            id: true,
            nodes: true,
            logs: true,
            exceptions: true,
            moneySavedPerExecution: true,
            timeSavedPerExecution: true,
          },
        },
      },
    });

    // Map and aggregate for the frontend
    return clients.map((client) => {
      const workflowsCount = client.workflows.length;
      const nodesCount = client.workflows.reduce(
        (sum, wf) => sum + (wf.nodes?.length || 0),
        0,
      );
      const executionsCount = client.workflows.reduce(
        (sum, wf) => sum + (wf.logs?.length || 0),
        0,
      );
      const exceptionsCount = client.workflows.reduce(
        (sum, wf) => sum + (wf.exceptions?.length || 0),
        0,
      );
      const revenue = 24500; // Replace with your logic
      const timeSaved = client.workflows.reduce(
        (sum, wf) => sum + (wf.timeSavedPerExecution || 0),
        0,
      );
      const moneySaved = client.workflows.reduce(
        (sum, wf) => sum + (wf.moneySavedPerExecution || 0),
        0,
      );

      return {
        id: client.id,
        name: client.name,
        contractStart: client.contractStart,
        workflows: workflowsCount,
        nodes: nodesCount,
        executions: executionsCount,
        exceptions: exceptionsCount,
        revenue: `$${revenue.toLocaleString()}`,
        timeSaved: `${timeSaved}h`,
        moneySaved: `$${moneySaved.toLocaleString()}`,
      };
    });
  }

  async findOne(id: string): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: { id },
      include: {
        users: {
          where: { user: { role: 'CLIENT' } },
          include: {
            user: true,
          },
        },
        departments: true,
        workflows: {
          include: {
            nodes: true,
            department: true,
          },
        },
        assignedSEs: {
          include: {
            se: true,
          },
        },
        credentials: true,
        documents: true,
      },
    });

    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }

    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    try {
      return await this.prisma.client.update({
        where: { id },
        data: {
          name: updateClientDto.name,
          url: updateClientDto.url,
          contractStart: updateClientDto.contractStart,
          contractEnd: updateClientDto.contractEnd,
          active: updateClientDto.active,
          departments: updateClientDto.departments
            ? {
                create: updateClientDto.departments.map((d) => ({
                  name: d.name,
                })),
              }
            : undefined,
          users: updateClientDto.users
            ? {
                create: updateClientDto.users.map((u) => ({
                  user: {
                    connectOrCreate: {
                      where: { email: u.email },
                      create: {
                        name: u.name,
                        email: u.email,
                        phone: u.phone,
                        role: 'CLIENT',
                        password: 'changeme',
                      },
                    },
                  },
                  isAdmin: u.access?.admin ?? false,
                  canBilling: u.access?.billing ?? false,
                  notes: '',
                  department: {
                    connect: {
                      id: u.department,
                    },
                  },
                })),
              }
            : undefined,
          assignedSEs: updateClientDto.assignedSEs
            ? {
                create: updateClientDto.assignedSEs.map((se) => ({
                  se: { connect: { email: se.email } },
                })),
              }
            : undefined,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to update client: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to update client');
    }
  }

  async remove(id: string): Promise<Client> {
    try {
      return await this.prisma.client.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to delete client: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to delete client');
    }
  }

  async assignSE(clientId: string, assignSEDto: AssignSEDto): Promise<void> {
    const { seId } = assignSEDto;

    const se = await this.prisma.user.findUnique({
      where: { id: seId },
    });

    if (!se || se.role !== 'SE') {
      throw new BadRequestException('Invalid SE ID or user is not an SE');
    }

    try {
      await this.prisma.clientsOnSEs.upsert({
        where: {
          clientId_seId: {
            clientId,
            seId,
          },
        },
        create: {
          clientId,
          seId,
        },
        update: {
          assignedAt: new Date(),
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(`Failed to assign SE: ${error.message}`);
      }
      throw new BadRequestException('Failed to assign SE');
    }
  }

  async removeSE(clientId: string, seId: string): Promise<void> {
    try {
      await this.prisma.clientsOnSEs.delete({
        where: {
          clientId_seId: {
            clientId,
            seId,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to remove SE assignment: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to remove SE assignment');
    }
  }

  async getAssignedSEs(clientId: string): Promise<User[]> {
    const assignments = await this.prisma.clientsOnSEs.findMany({
      where: { clientId },
      include: {
        se: true,
      },
    });

    return assignments.map((assignment) => assignment.se);
  }

  async getDepartments(clientId: string): Promise<Department[]> {
    return this.prisma.department.findMany({
      where: { clientId },
    });
  }

  async getClientOverview(id: string) {
    const client = await this.prisma.client.findUnique({
      where: { id },
      include: {
        assignedSEs: { include: { se: true } },
        users: { include: { user: true } },
        documents: true,
        pipelineSteps: true,
      },
    });
    if (!client) throw new NotFoundException('Client not found');
    return {
      assignedSEs: client.assignedSEs.map((a) => a.se),
      clientUsers: client.users.map((cu) => ({
        name: cu.user.name,
        email: cu.user.email,
        phone: cu.user.phone,
        admin: cu.isAdmin,
        billing: cu.canBilling,
        notes: cu.notes,
      })),
      documents: client.documents,
      pipeline: client.pipelineSteps
        .sort((a, b) => a.order - b.order)
        .map((step) => ({
          id: step.id,
          label: step.label,
          order: step.order,
          completedAt: step.completedAt,
        })),
    };
  }

  async markPipelineStepComplete(clientId: string, stepId: string) {
    // Only allow marking the next incomplete step
    const steps = await this.prisma.pipelineStep.findMany({
      where: { clientId },
      orderBy: { order: 'asc' },
    });
    const nextIncomplete = steps.find((s) => !s.completedAt);
    if (!nextIncomplete || nextIncomplete.id !== stepId) {
      throw new BadRequestException(
        'Can only complete the next incomplete step',
      );
    }
    return this.prisma.pipelineStep.update({
      where: { id: stepId },
      data: { completedAt: new Date() },
    });
  }

  async updateDocumentLink(clientId: string, docId: string, url: string) {
    // Optionally check that the document belongs to the client
    const doc = await this.prisma.documentLink.findUnique({
      where: { id: docId },
    });
    if (!doc || doc.clientId !== clientId) {
      throw new NotFoundException('Document not found for this client');
    }
    return this.prisma.documentLink.update({
      where: { id: docId },
      data: { url },
    });
  }

  async getClientWorkflows(id: string) {
    return this.prisma.workflow.findMany({
      where: { clientId: id },
      include: {
        department: true,
        nodes: true,
        logs: true,
        exceptions: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateWorkflow(
    clientId: string,
    workflowId: string,
    data: {
      timeSavedPerExecution?: number;
      moneySavedPerExecution?: number;
      status?: WorkflowStatus;
    },
  ) {
    // Optionally check workflow belongs to client
    const workflow = await this.prisma.workflow.findUnique({
      where: { id: workflowId },
    });
    if (!workflow || workflow.clientId !== clientId)
      throw new NotFoundException('Workflow not found');
    return this.prisma.workflow.update({
      where: { id: workflowId },
      data: {
        timeSavedPerExecution: data.timeSavedPerExecution,
        moneySavedPerExecution: data.moneySavedPerExecution,
        status: data.status,
      },
    });
  }

  async getClientUsers(id: string) {
    const users = await this.prisma.user.findMany({
      where: {
        clientUsers: {
          some: {
            clientId: id,
          },
        },
      },
      include: {
        clientUsers: true,
      },
    });
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      canBilling: user.clientUsers[0]?.canBilling,
      isAdmin: user.clientUsers[0]?.isAdmin,
      notes: user.clientUsers[0]?.notes,
    }));
  }
}
