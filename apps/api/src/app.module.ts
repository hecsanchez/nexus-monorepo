import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/user/user.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ClientsModule } from './modules/clients/clients.module';
import { PlansModule } from './modules/plans/plans.module';
import { ExceptionsModule } from './modules/exceptions/exceptions.module';
import { WorkflowsModule } from './modules/workflows/workflows.module';
import { BillingModule } from './modules/billing/billing.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    DashboardModule,
    ClientsModule,
    PlansModule,
    ExceptionsModule,
    WorkflowsModule,
    BillingModule,
  ],
})
export class AppModule {}
