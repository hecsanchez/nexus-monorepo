import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { subDays, startOfMonth, startOfQuarter, startOfYear } from 'date-fns';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getSummary(range: string = 'itd') {
    let fromDate: Date | undefined;

    const now = new Date();

    switch ((range || 'itd').toLowerCase()) {
      case 'last7':
        fromDate = subDays(now, 7);
        break;
      case 'last30':
        fromDate = subDays(now, 30);
        break;
      case 'mtd':
        fromDate = startOfMonth(now);
        break;
      case 'qtd':
        fromDate = startOfQuarter(now);
        break;
      case 'ytd':
        fromDate = startOfYear(now);
        break;
      case 'itd':
      default:
        fromDate = undefined;
    }

    // Build where clause for date filtering
    const dateFilter = fromDate ? { createdAt: { gte: fromDate } } : {};

    // Example: filter workflows, exceptions, clients by createdAt
    const [totalWorkflows, totalExceptions, activeClients] = await Promise.all([
      this.prisma.workflow.count({ where: dateFilter }),
      this.prisma.exception.count({ where: { timestamp: { gte: fromDate } } }),
      this.prisma.client.count({ where: { ...dateFilter, active: true } }),
    ]);

    // TODO: Replace with real calculations
    const timeSaved = 1284; // Mocked value
    const revenue = 847000; // Mocked value

    return {
      totalWorkflows,
      totalExceptions,
      timeSaved,
      revenue,
      activeClients,
    };
  }
}
