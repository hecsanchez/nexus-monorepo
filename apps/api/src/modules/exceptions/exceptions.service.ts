import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { Exception, ExceptionSeverity, ExceptionStatus } from '@schema';
import { CreateExceptionDto } from './dto/create-exception.dto';
import { UpdateExceptionDto } from './dto/update-exception.dto';

@Injectable()
export class ExceptionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExceptionDto: CreateExceptionDto): Promise<Exception> {
    try {
      // Verify workflow exists
      const workflow = await this.prisma.workflow.findUnique({
        where: { id: createExceptionDto.workflowId },
      });

      if (!workflow) {
        throw new BadRequestException('Workflow not found');
      }

      // If execution log is provided, verify it exists
      if (createExceptionDto.executionLogId) {
        const log = await this.prisma.executionLog.findUnique({
          where: { id: createExceptionDto.executionLogId },
        });

        if (!log) {
          throw new BadRequestException('Execution log not found');
        }
      }

      return await this.prisma.exception.create({
        data: createExceptionDto,
        include: {
          workflow: {
            include: {
              client: true,
            },
          },
          logs: true,
        },
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Failed to create exception',
      );
    }
  }

  async findAll(
    clientId?: string,
    severity?: ExceptionSeverity,
    status?: ExceptionStatus,
  ): Promise<Exception[]> {
    return this.prisma.exception.findMany({
      where: {
        workflow: clientId ? { clientId } : undefined,
        severity,
        status,
      },
      include: {
        workflow: {
          include: {
            client: true,
          },
        },
        logs: true,
        notifiedUsers: true,
      },
      orderBy: { timestamp: 'desc' },
    });
  }

  async findOne(id: string): Promise<Exception> {
    const exception = await this.prisma.exception.findUnique({
      where: { id },
      include: {
        workflow: {
          include: {
            client: true,
          },
        },
        logs: true,
        notifiedUsers: true,
      },
    });

    if (!exception) {
      throw new NotFoundException(`Exception with ID ${id} not found`);
    }

    return exception;
  }

  async update(
    id: string,
    updateExceptionDto: UpdateExceptionDto,
  ): Promise<Exception> {
    try {
      // If execution log is provided, verify it exists
      if (updateExceptionDto.executionLogId) {
        const log = await this.prisma.executionLog.findUnique({
          where: { id: updateExceptionDto.executionLogId },
        });

        if (!log) {
          throw new BadRequestException('Execution log not found');
        }
      }

      return await this.prisma.exception.update({
        where: { id },
        data: updateExceptionDto,
        include: {
          workflow: {
            include: {
              client: true,
            },
          },
          logs: true,
          notifiedUsers: true,
        },
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Failed to update exception',
      );
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.exception.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Failed to delete exception',
      );
    }
  }

  async notifyUsers(id: string, userIds: string[]): Promise<Exception> {
    try {
      // Verify exception exists
      const exception = await this.findOne(id);

      if (!exception) {
        throw new BadRequestException('Exception not found');
      }

      // Verify all users exist
      const users = await this.prisma.user.findMany({
        where: {
          id: {
            in: userIds,
          },
        },
      });

      if (users.length !== userIds.length) {
        throw new BadRequestException('One or more users not found');
      }

      return await this.prisma.exception.update({
        where: { id },
        data: {
          notifiedUsers: {
            connect: userIds.map((userId) => ({ id: userId })),
          },
        },
        include: {
          workflow: {
            include: {
              client: true,
            },
          },
          logs: true,
          notifiedUsers: true,
        },
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Failed to notify users',
      );
    }
  }

  async getClientExceptions(
    clientId: string,
    severity?: ExceptionSeverity,
    status?: ExceptionStatus,
  ): Promise<Exception[]> {
    return this.findAll(clientId, severity, status);
  }

  async getWorkflowExceptions(
    workflowId: string,
    severity?: ExceptionSeverity,
    status?: ExceptionStatus,
  ): Promise<Exception[]> {
    return this.prisma.exception.findMany({
      where: {
        workflowId,
        severity,
        status,
      },
      include: {
        workflow: {
          include: {
            client: true,
          },
        },
        logs: true,
        notifiedUsers: true,
      },
      orderBy: { timestamp: 'desc' },
    });
  }
}
