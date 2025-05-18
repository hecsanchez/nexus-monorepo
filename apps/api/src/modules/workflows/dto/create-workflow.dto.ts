import { IsString, IsOptional, IsUUID, IsEnum } from 'class-validator';
import { WorkflowStatus } from '@schema';

export class CreateWorkflowDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUUID()
  departmentId: string;

  @IsUUID()
  clientId: string;

  @IsEnum(WorkflowStatus)
  @IsOptional()
  status?: WorkflowStatus = WorkflowStatus.ACTIVE;
} 