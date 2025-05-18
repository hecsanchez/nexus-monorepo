import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { Workflow, Node, ExecutionLog } from '@schema';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { CreateNodeDto } from './dto/create-node.dto';

@Injectable()
export class WorkflowsService {
  constructor(private prisma: PrismaService) {}

  async create(createWorkflowDto: CreateWorkflowDto): Promise<Workflow> {
    try {
      // Verify department and client exist
      const [department, client] = await Promise.all([
        this.prisma.department.findUnique({
          where: { id: createWorkflowDto.departmentId },
        }),
        this.prisma.client.findUnique({
          where: { id: createWorkflowDto.clientId },
        }),
      ]);

      if (!department) {
        throw new BadRequestException('Department not found');
      }
      if (!client) {
        throw new BadRequestException('Client not found');
      }

      return this.prisma.workflow.create({
        data: {
          name: createWorkflowDto.name,
          description: createWorkflowDto.description,
          departmentId: createWorkflowDto.departmentId,
          clientId: createWorkflowDto.clientId,
          status: createWorkflowDto.status,
          active: true,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to create workflow: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to create workflow');
    }
  }

  async findAll(): Promise<Workflow[]> {
    return this.prisma.workflow.findMany({
      include: {
        department: true,
        client: true,
        nodes: true,
        logs: {
          take: 10,
          orderBy: { timestamp: 'desc' },
        },
      },
    });
  }

  async findOne(id: string): Promise<Workflow> {
    const workflow = await this.prisma.workflow.findUnique({
      where: { id },
      include: {
        department: true,
        client: true,
        nodes: true,
        logs: {
          orderBy: { timestamp: 'desc' },
        },
        exceptions: {
          orderBy: { timestamp: 'desc' },
        },
      },
    });

    if (!workflow) {
      throw new NotFoundException(`Workflow with ID ${id} not found`);
    }

    return workflow;
  }

  async update(
    id: string,
    updateWorkflowDto: UpdateWorkflowDto,
  ): Promise<Workflow> {
    try {
      return await this.prisma.workflow.update({
        where: { id },
        data: updateWorkflowDto,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to update workflow: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to update workflow');
    }
  }

  async remove(id: string): Promise<Workflow> {
    try {
      return await this.prisma.workflow.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to delete workflow: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to delete workflow');
    }
  }

  async createNode(createNodeDto: CreateNodeDto): Promise<Node> {
    try {
      // Verify workflow exists
      const workflow = await this.prisma.workflow.findUnique({
        where: { id: createNodeDto.workflowId },
      });

      if (!workflow) {
        throw new BadRequestException('Workflow not found');
      }

      return this.prisma.node.create({
        data: {
          name: createNodeDto.name,
          type: createNodeDto.type,
          workflowId: createNodeDto.workflowId,
          config: createNodeDto.config,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to create node: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to create node');
    }
  }

  async getNodes(workflowId: string): Promise<Node[]> {
    const workflow = await this.prisma.workflow.findUnique({
      where: { id: workflowId },
      include: { nodes: true },
    });

    if (!workflow) {
      throw new NotFoundException(`Workflow with ID ${workflowId} not found`);
    }

    return workflow.nodes;
  }

  async logExecution(
    workflowId: string,
    nodeId: string | null,
    status: string,
    log?: string,
  ): Promise<ExecutionLog> {
    try {
      return await this.prisma.executionLog.create({
        data: {
          workflowId,
          nodeId,
          status,
          log,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to log execution: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to log execution');
    }
  }

  async getExecutionLogs(
    workflowId: string,
    limit = 100,
    offset = 0,
  ): Promise<ExecutionLog[]> {
    return this.prisma.executionLog.findMany({
      where: { workflowId },
      orderBy: { timestamp: 'desc' },
      take: limit,
      skip: offset,
      include: {
        node: true,
        exception: true,
      },
    });
  }

  async toggleStatus(id: string, active: boolean): Promise<Workflow> {
    try {
      return await this.prisma.workflow.update({
        where: { id },
        data: { active },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to toggle workflow status: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to toggle workflow status');
    }
  }
}
