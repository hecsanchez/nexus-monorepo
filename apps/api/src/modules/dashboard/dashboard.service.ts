import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getSummary() {
    const [totalWorkflows, totalExceptions, activeClients] = await Promise.all([
      this.prisma.workflow.count(),
      this.prisma.exception.count(),
      this.prisma.client.count({ where: { active: true } }),
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