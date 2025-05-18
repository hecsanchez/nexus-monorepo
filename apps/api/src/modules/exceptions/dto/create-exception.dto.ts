import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ExceptionSeverity, ExceptionStatus } from '@schema';

export class CreateExceptionDto {
  @IsUUID()
  workflowId: string;

  @IsString()
  type: string;

  @IsEnum(ExceptionSeverity)
  severity: ExceptionSeverity;

  @IsString()
  @IsOptional()
  remedy?: string;

  @IsEnum(ExceptionStatus)
  @IsOptional()
  status?: ExceptionStatus = ExceptionStatus.OPEN;

  @IsUUID()
  @IsOptional()
  executionLogId?: string;
} 