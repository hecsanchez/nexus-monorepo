import { IsUUID, IsString, IsOptional } from 'class-validator';

export class CreateSubscriptionDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  planId: string;

  @IsString()
  @IsOptional()
  status?: string = 'active';
} 