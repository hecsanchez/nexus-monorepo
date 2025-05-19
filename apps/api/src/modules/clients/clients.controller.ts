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
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { AssignSEDto } from './dto/assign-se.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole, WorkflowStatus } from '@prisma/client';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';

@Controller('clients')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.SE)
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientsService.remove(id);
  }

  @Post(':id/assign-se')
  @Roles(UserRole.ADMIN)
  assignSE(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() assignSEDto: AssignSEDto,
  ) {
    return this.clientsService.assignSE(id, assignSEDto);
  }

  @Delete(':id/assign-se/:seId')
  @Roles(UserRole.ADMIN)
  removeSE(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('seId', ParseUUIDPipe) seId: string,
  ) {
    return this.clientsService.removeSE(id, seId);
  }

  @Get(':id/assigned-ses')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getAssignedSEs(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientsService.getAssignedSEs(id);
  }

  @Get(':id/departments')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getDepartments(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientsService.getDepartments(id);
  }

  @Get(':id/overview')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getClientOverview(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientsService.getClientOverview(id);
  }

  @Patch(':id/pipeline/:stepId')
  @Roles(UserRole.ADMIN, UserRole.SE)
  markPipelineStepComplete(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('stepId', ParseUUIDPipe) stepId: string,
  ) {
    return this.clientsService.markPipelineStepComplete(id, stepId);
  }

  @Patch(':id/documents/:docId')
  @Roles(UserRole.ADMIN, UserRole.SE)
  updateDocumentLink(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('docId', ParseUUIDPipe) docId: string,
    @Body() body: { url: string },
  ) {
    return this.clientsService.updateDocumentLink(id, docId, body.url);
  }

  @Get(':id/workflows')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getClientWorkflows(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientsService.getClientWorkflows(id);
  }

  @Patch(':id/workflows/:workflowId')
  @Roles(UserRole.ADMIN, UserRole.SE)
  updateWorkflow(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('workflowId', ParseUUIDPipe) workflowId: string,
    @Body()
    body: {
      timeSavedPerExecution?: number;
      moneySavedPerExecution?: number;
      status?: WorkflowStatus;
    },
  ) {
    return this.clientsService.updateWorkflow(id, workflowId, body);
  }
}
