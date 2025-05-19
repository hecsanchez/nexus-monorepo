import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreatePlanDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  pricePerCredit: number;

  @IsNumber()
  contractLength: number;

  @IsString()
  cadence: string;

  @IsOptional()
  @IsNumber()
  setupFee?: number;

  @IsOptional()
  @IsNumber()
  cap?: number;

  @IsOptional()
  @IsNumber()
  overageCost?: number;

  @IsOptional()
  @IsString()
  usageApi?: string;

  @IsOptional()
  @IsNumber()
  creditsPerPeriod?: number;

  @IsOptional()
  @IsNumber()
  prepaymentPercentage?: number;
}
