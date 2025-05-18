import { IsString, IsOptional, IsDateString, IsBoolean } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsDateString()
  @IsOptional()
  contractStart?: Date;

  @IsDateString()
  @IsOptional()
  contractEnd?: Date;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
} 