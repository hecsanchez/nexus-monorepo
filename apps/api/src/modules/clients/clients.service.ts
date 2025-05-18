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
        url: true,
        contractStart: true,
        user: { select: { name: true } },
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
        name: client.user?.name || 'N/A',
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
        user: true,
        departments: true,
        workflows: {
          include: {
            nodes: true,
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
}
