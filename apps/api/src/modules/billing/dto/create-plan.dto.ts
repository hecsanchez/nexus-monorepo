import {
  IsString,
  IsNumber,
  IsOptional,
  IsEnum,
  Min,
  IsUrl,
  Max,
} from 'class-validator';
import { PlanCadence } from '@schema';

export class CreatePlanDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  pricePerCredit: number;

  @IsNumber()
  @Min(1)
  contractLength: number;

  @IsEnum(PlanCadence)
  cadence: PlanCadence;

  @IsNumber()
  @Min(0)
  @IsOptional()
  setupFee?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  cap?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  overageCost?: number;

  @IsUrl()
  @IsOptional()
  usageApi?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  creditsPerPeriod?: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  prepaymentPercentage?: number;
}
