import {
  IsString,
  IsOptional,
  IsDateString,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsEmail,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateClientUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  department: string;

  @IsOptional()
  exceptions?: { email: boolean; sms: boolean };

  @IsOptional()
  access?: { billing: boolean; admin: boolean };
}

export class CreateClientAssignedSEDto {
  @IsUUID()
  seId: string;

  @IsEmail()
  email: string;
}

export class CreateClientDepartmentDto {
  @IsString()
  name: string;
}

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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateClientUserDto)
  @IsOptional()
  users?: CreateClientUserDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateClientAssignedSEDto)
  @IsOptional()
  assignedSEs?: CreateClientAssignedSEDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateClientDepartmentDto)
  @IsOptional()
  departments?: CreateClientDepartmentDto[];
}
