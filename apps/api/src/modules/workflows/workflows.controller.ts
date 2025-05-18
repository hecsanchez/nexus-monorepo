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
  ParseIntPipe,
} from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { CreateNodeDto } from './dto/create-node.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@schema';

@Controller('workflows')
@UseGuards(JwtAuthGuard, RolesGuard)
export class WorkflowsController {
  constructor(private readonly workflowsService: WorkflowsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SE)
  create(@Body() createWorkflowDto: CreateWorkflowDto) {
    return this.workflowsService.create(createWorkflowDto);
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findAll() {
    return this.workflowsService.findAll();
  }

  @Get(':id')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.workflowsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.SE)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateWorkflowDto: UpdateWorkflowDto,
  ) {
    return this.workflowsService.update(id, updateWorkflowDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.workflowsService.remove(id);
  }

  @Post(':id/nodes')
  @Roles(UserRole.ADMIN, UserRole.SE)
  createNode(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() createNodeDto: CreateNodeDto,
  ) {
    return this.workflowsService.createNode({
      ...createNodeDto,
      workflowId: id,
    });
  }

  @Get(':id/nodes')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getNodes(@Param('id', ParseUUIDPipe) id: string) {
    return this.workflowsService.getNodes(id);
  }

  @Get(':id/logs')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getExecutionLogs(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number,
    @Query('offset', new ParseIntPipe({ optional: true })) offset?: number,
  ) {
    return this.workflowsService.getExecutionLogs(id, limit, offset);
  }

  @Patch(':id/toggle')
  @Roles(UserRole.ADMIN, UserRole.SE)
  toggleStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('active') active: boolean,
  ) {
    return this.workflowsService.toggleStatus(id, active);
  }
} 