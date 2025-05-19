import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('dashboard')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('summary')
  @Roles(UserRole.ADMIN, UserRole.SE)
  async getSummary(@Query('range') range: string) {
    return this.dashboardService.getSummary(range);
  }

  /**
   * Returns client dashboard summary stats:
   * - timeSaved: number (last 7 days)
   * - timeSavedAll: number (all time)
   * - moneySaved: number (last 7 days)
   * - moneySavedAll: number (all time)
   * - activeWorkflows: number
   */
  @Get('client-summary')
  @Roles(UserRole.CLIENT)
  async getClientSummary(
    @Query('clientId') clientId: string,
    @Query('range') range: string,
  ) {
    return this.dashboardService.getClientSummary(clientId, range);
  }
}
