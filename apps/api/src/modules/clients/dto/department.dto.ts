import { IsString, IsOptional } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  title: string;
}

export class UpdateDepartmentDto {
  @IsOptional()
  @IsString()
  title?: string;
}
