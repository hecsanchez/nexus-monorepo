import { IsEnum, IsObject, IsOptional, IsString } from 'class-validator';
import { CredentialService, CredentialStatus } from '@prisma/client';
import { InputJsonValue } from '@prisma/client/runtime/library';

export class CreateCredentialDto {
  @IsString()
  clientId: string;

  @IsEnum(CredentialService)
  service: CredentialService;

  @IsEnum(CredentialStatus)
  @IsOptional()
  status?: CredentialStatus = CredentialStatus.DISCONNECTED;

  @IsObject()
  @IsOptional()
  config?: InputJsonValue;
} 