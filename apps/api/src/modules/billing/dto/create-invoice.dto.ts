import {
  IsUUID,
  IsNumber,
  IsDateString,
  IsString,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { InvoiceStatus } from '@prisma/client';

export class CreateInvoiceDto {
  @IsUUID()
  subscriptionId: string;

  @IsDateString()
  issueDate: Date;

  @IsDateString()
  dueDate: Date;

  @IsNumber()
  amount: number;

  @IsEnum(InvoiceStatus)
  @IsOptional()
  status?: InvoiceStatus = InvoiceStatus.DRAFT;

  @IsString()
  @IsOptional()
  paymentMethod?: string;
}
