import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { ExceptionsService } from './exceptions.service';
import { CreateExceptionDto } from './dto/create-exception.dto';
import { UpdateExceptionDto } from './dto/update-exception.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole, ExceptionSeverity, ExceptionStatus } from '@prisma/client';

@Controller('exceptions')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ExceptionsController {
  constructor(private readonly exceptionsService: ExceptionsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SE)
  create(@Body() createExceptionDto: CreateExceptionDto) {
    return this.exceptionsService.create(createExceptionDto);
  }

  @Get()
  @Roles(UserRole.SE, UserRole.CLIENT)
  findAll(
    @Query('clientId') clientId?: string,
    @Query('severity') severity?: ExceptionSeverity,
    @Query('status') status?: ExceptionStatus,
  ) {
    return this.exceptionsService.findAll(clientId, severity, status);
  }

  @Get(':id')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.exceptionsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.CLIENT, UserRole.SE)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateExceptionDto: UpdateExceptionDto,
  ) {
    return this.exceptionsService.update(id, updateExceptionDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.exceptionsService.remove(id);
  }

  @Post(':id/notify')
  @Roles(UserRole.ADMIN, UserRole.SE)
  notifyUsers(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('userIds') userIds: string[],
  ) {
    return this.exceptionsService.notifyUsers(id, userIds);
  }

  @Get('clients/:clientId')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getClientExceptions(
    @Param('clientId', ParseUUIDPipe) clientId: string,
    @Query('severity') severity?: ExceptionSeverity,
    @Query('status') status?: ExceptionStatus,
  ) {
    return this.exceptionsService.getClientExceptions(
      clientId,
      severity,
      status,
    );
  }

  @Get('workflows/:workflowId')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getWorkflowExceptions(
    @Param('workflowId', ParseUUIDPipe) workflowId: string,
    @Query('severity') severity?: ExceptionSeverity,
    @Query('status') status?: ExceptionStatus,
  ) {
    return this.exceptionsService.getWorkflowExceptions(
      workflowId,
      severity,
      status,
    );
  }
} 