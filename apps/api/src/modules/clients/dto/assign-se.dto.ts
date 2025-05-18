import { IsString, IsNotEmpty } from 'class-validator';

export class AssignSEDto {
  @IsString()
  @IsNotEmpty()
  seId: string;
}