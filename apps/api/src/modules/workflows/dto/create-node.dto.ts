import { InputJsonValue } from '@prisma/client/runtime/library';
import { IsString, IsOptional, IsUUID, IsObject } from 'class-validator';

export class CreateNodeDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsUUID()
  workflowId: string;

  @IsObject()
  @IsOptional()
  config?: InputJsonValue;
}
