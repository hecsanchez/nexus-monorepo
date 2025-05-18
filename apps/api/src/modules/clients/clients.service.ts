import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { Client, User, Department } from '@prisma/client';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { AssignSEDto } from './dto/assign-se.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  create(createClientDto: CreateClientDto): Promise<Client> {
    return this.prisma.client.create({
      data: {
        name: createClientDto.name,
        url: createClientDto.url,
        contractStart: createClientDto.contractStart,
        contractEnd: createClientDto.contractEnd,
        active: true,
      },
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
        data: updateClientDto,
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
}
