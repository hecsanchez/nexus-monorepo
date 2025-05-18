import { IsEnum, IsObject, IsOptional } from 'class-validator';
import { CredentialStatus } from '@prisma/client';
import { InputJsonValue } from '@prisma/client/runtime/library';

export class UpdateCredentialDto {
  @IsEnum(CredentialStatus)
  @IsOptional()
  status?: CredentialStatus;

  @IsObject()
  @IsOptional()
  config?: InputJsonValue;
} 