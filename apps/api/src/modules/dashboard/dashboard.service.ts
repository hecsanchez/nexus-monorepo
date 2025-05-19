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
    const dateFilter = fromDate ? { createdAt: { gte: fromDate } } : {};

    // Example: filter workflows, exceptions, clients by createdAt
    const [totalWorkflows, totalExceptions, activeClients] = await Promise.all([
      this.prisma.workflow.count({ where: dateFilter }),
      this.prisma.exception.count({ where: { timestamp: { gte: fromDate } } }),
      this.prisma.client.count({ where: { ...dateFilter, active: true } }),
    ]);

    // Get all workflows
    const workflows = await this.prisma.workflow.findMany({
      select: { id: true, timeSavedPerExecution: true, moneySavedPerExecution: true },
    });

    // For each workflow, count executions (logs) in last 7 days and all time
    let timeSaved = 0;
    let revenue = 0;
    let timeSavedAll = 0;
    let revenueAll = 0;
    for (const wf of workflows) {
      // All time executions
      const allLogsCount = await this.prisma.executionLog.count({ where: { workflowId: wf.id } });
      timeSavedAll += (wf.timeSavedPerExecution || 0) * allLogsCount;
      revenueAll += (wf.moneySavedPerExecution || 0) * allLogsCount;
      // Last 7 days executions
      const logsCount = fromDate
        ? await this.prisma.executionLog.count({ where: { workflowId: wf.id, timestamp: { gte: fromDate } } })
        : allLogsCount;
      timeSaved += (wf.timeSavedPerExecution || 0) * logsCount;
      revenue += (wf.moneySavedPerExecution || 0) * logsCount;
    }

    return {
      totalWorkflows,
      totalExceptions,
      timeSaved,
      timeSavedAll,
      revenue,
      revenueAll,
      activeClients,
    };
  }

  async getClientSummary(clientId: string, range: string = 'itd') {
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
    const dateFilter = fromDate ? { createdAt: { gte: fromDate } } : {};
    // Count active workflows for this client
    const activeWorkflows = await this.prisma.workflow.count({
      where: {
        clientId,
        ...dateFilter,
        status: 'ACTIVE',
      },
    });

    // Get all workflows for this client
    const workflows = await this.prisma.workflow.findMany({
      where: { clientId },
      select: { id: true, timeSavedPerExecution: true, moneySavedPerExecution: true },
    });

    // For each workflow, count executions (logs) in last 7 days and all time
    let timeSaved = 0;
    let moneySaved = 0;
    let timeSavedAll = 0;
    let moneySavedAll = 0;
    for (const wf of workflows) {
      // All time executions
      const allLogsCount = await this.prisma.executionLog.count({ where: { workflowId: wf.id } });
      timeSavedAll += (wf.timeSavedPerExecution || 0) * allLogsCount;
      moneySavedAll += (wf.moneySavedPerExecution || 0) * allLogsCount;
      // Last 7 days executions
      const logsCount = fromDate
        ? await this.prisma.executionLog.count({ where: { workflowId: wf.id, timestamp: { gte: fromDate } } })
        : allLogsCount;
      timeSaved += (wf.timeSavedPerExecution || 0) * logsCount;
      moneySaved += (wf.moneySavedPerExecution || 0) * logsCount;
    }

    return {
      timeSaved,
      timeSavedAll,
      moneySaved,
      moneySavedAll,
      activeWorkflows,
    };
  }
}
