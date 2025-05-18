import { IsEnum, IsObject, IsOptional, IsString } from 'class-validator';
import { CredentialService, CredentialStatus } from '@schema';
import { InputJsonValue } from '@schema/runtime/library';

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