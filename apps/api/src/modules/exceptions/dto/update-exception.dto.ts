import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ExceptionSeverity, ExceptionStatus } from '@prisma/client';

export class UpdateExceptionDto {
  @IsString()
  @IsOptional()
  type?: string;

  @IsEnum(ExceptionSeverity)
  @IsOptional()
  severity?: ExceptionSeverity;

  @IsString()
  @IsOptional()
  remedy?: string;

  @IsEnum(ExceptionStatus)
  @IsOptional()
  status?: ExceptionStatus;

  @IsUUID()
  @IsOptional()
  executionLogId?: string;
} 