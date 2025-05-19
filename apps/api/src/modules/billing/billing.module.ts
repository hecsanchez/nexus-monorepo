import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { PrismaService } from '@/prisma.service';
import { StripeService } from './stripe.service';

@Module({
  imports: [ConfigModule],
  controllers: [BillingController],
  providers: [BillingService, PrismaService, StripeService],
  exports: [BillingService, StripeService],
})
export class BillingModule {} 