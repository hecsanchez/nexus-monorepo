import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/user/user.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, DashboardModule],
})
export class AppModule {}
