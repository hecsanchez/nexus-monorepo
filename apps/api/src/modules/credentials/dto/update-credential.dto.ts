import { IsEnum, IsObject, IsOptional } from 'class-validator';
import { CredentialStatus } from '@schema';
import { InputJsonValue } from '@schema/runtime/library';

export class UpdateCredentialDto {
  @IsEnum(CredentialStatus)
  @IsOptional()
  status?: CredentialStatus;

  @IsObject()
  @IsOptional()
  config?: InputJsonValue;
} 