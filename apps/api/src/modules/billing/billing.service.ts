import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { Plan, Subscription, Invoice, InvoiceStatus } from '@schema';
import { CreatePlanDto } from './dto/create-plan.dto';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class BillingService {
  constructor(private prisma: PrismaService) {}

  // Plan Management
  async createPlan(createPlanDto: CreatePlanDto): Promise<Plan> {
    try {
      return await this.prisma.plan.create({
        data: createPlanDto,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to create plan: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to create plan');
    }
  }

  async findAllPlans(): Promise<Plan[]> {
    return this.prisma.plan.findMany({
      include: {
        subscriptions: {
          include: {
            client: true,
          },
        },
      },
    });
  }

  async findPlan(id: string): Promise<Plan> {
    const plan = await this.prisma.plan.findUnique({
      where: { id },
      include: {
        subscriptions: {
          include: {
            client: true,
            invoices: true,
          },
        },
      },
    });

    if (!plan) {
      throw new NotFoundException(`Plan with ID ${id} not found`);
    }

    return plan;
  }

  // Subscription Management
  async createSubscription(
    createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<Subscription> {
    try {
      // Verify client and plan exist
      const [client, plan] = await Promise.all([
        this.prisma.client.findUnique({
          where: { id: createSubscriptionDto.clientId },
        }),
        this.prisma.plan.findUnique({
          where: { id: createSubscriptionDto.planId },
        }),
      ]);

      if (!client) {
        throw new BadRequestException('Client not found');
      }
      if (!plan) {
        throw new BadRequestException('Plan not found');
      }

      // Check for existing active subscription
      const existingSubscription = await this.prisma.subscription.findFirst({
        where: {
          clientId: createSubscriptionDto.clientId,
          status: 'active',
        },
      });

      if (existingSubscription) {
        throw new BadRequestException(
          'Client already has an active subscription',
        );
      }

      return await this.prisma.subscription.create({
        data: {
          clientId: createSubscriptionDto.clientId,
          planId: createSubscriptionDto.planId,
          status: createSubscriptionDto.status,
          billedToDate: new Date(),
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to create subscription: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to create subscription');
    }
  }

  async findClientSubscriptions(clientId: string): Promise<Subscription[]> {
    return this.prisma.subscription.findMany({
      where: { clientId },
      include: {
        plan: true,
        invoices: {
          orderBy: { issueDate: 'desc' },
        },
      },
    });
  }

  async updateSubscriptionStatus(
    id: string,
    status: string,
  ): Promise<Subscription> {
    try {
      return await this.prisma.subscription.update({
        where: { id },
        data: { status },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to update subscription status: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to update subscription status');
    }
  }

  // Invoice Management
  async createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    try {
      // Verify subscription exists
      const subscription = await this.prisma.subscription.findUnique({
        where: { id: createInvoiceDto.subscriptionId },
      });

      if (!subscription) {
        throw new BadRequestException('Subscription not found');
      }

      return await this.prisma.invoice.create({
        data: createInvoiceDto,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to create invoice: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to create invoice');
    }
  }

  async findClientInvoices(clientId: string): Promise<Invoice[]> {
    const subscriptions = await this.prisma.subscription.findMany({
      where: { clientId },
      select: { id: true },
    });

    return this.prisma.invoice.findMany({
      where: {
        subscriptionId: {
          in: subscriptions.map((sub) => sub.id),
        },
      },
      include: {
        subscription: {
          include: {
            plan: true,
          },
        },
      },
      orderBy: { issueDate: 'desc' },
    });
  }

  async updateInvoiceStatus(
    id: string,
    status: InvoiceStatus,
  ): Promise<Invoice> {
    try {
      return await this.prisma.invoice.update({
        where: { id },
        data: { status },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          `Failed to update invoice status: ${error.message}`,
        );
      }
      throw new BadRequestException('Failed to update invoice status');
    }
  }

  // Usage and Credits
  async getClientCredits(clientId: string): Promise<number> {
    const subscription = await this.prisma.subscription.findFirst({
      where: {
        clientId,
        status: 'active',
      },
      include: {
        plan: true,
      },
    });

    if (!subscription) {
      return 0;
    }

    // TODO: Implement credit calculation based on plan and usage
    return subscription.plan.creditsPerPeriod || 0;
  }

  async recordUsage(
    clientId: string,
    credits: number,
    description: string,
  ): Promise<void> {
    try {
      // Get active subscription
      const subscription = await this.prisma.subscription.findFirst({
        where: {
          clientId,
          status: 'active',
        },
        include: {
          plan: true,
        },
      });

      if (!subscription) {
        throw new BadRequestException(
          'No active subscription found for client',
        );
      }

      // Calculate available credits
      const availableCredits = await this.getClientCredits(clientId);

      if (availableCredits < credits) {
        // Handle overage if plan has overage cost
        if (subscription.plan.overageCost) {
          // Create an invoice for the overage
          await this.prisma.invoice.create({
            data: {
              subscriptionId: subscription.id,
              issueDate: new Date(),
              dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
              amount:
                (credits - availableCredits) * subscription.plan.overageCost,
              status: InvoiceStatus.DRAFT,
              description: `Overage charges for: ${description}`,
            },
          });
        } else {
          throw new BadRequestException('Insufficient credits available');
        }
      }

      // Record the usage
      await this.prisma.usageLog.create({
        data: {
          subscriptionId: subscription.id,
          credits,
          description,
          timestamp: new Date(),
        },
      });

      // Update subscription's billed to date
      await this.prisma.subscription.update({
        where: { id: subscription.id },
        data: { billedToDate: new Date() },
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Failed to record usage',
      );
    }
  }

  async getClientUsageHistory(
    clientId: string,
    startDate?: Date,
    endDate?: Date,
  ): Promise<
    Array<{
      id: string;
      credits: number;
      description: string;
      timestamp: Date;
      subscription: {
        id: string;
        plan: {
          id: string;
          name: string;
        };
      };
    }>
  > {
    const subscriptions = await this.prisma.subscription.findMany({
      where: { clientId },
      select: { id: true },
    });

    const usageLogs = await this.prisma.usageLog.findMany({
      where: {
        subscriptionId: {
          in: subscriptions.map((sub) => sub.id),
        },
        ...(startDate && endDate
          ? {
              timestamp: {
                gte: startDate,
                lte: endDate,
              },
            }
          : {}),
      },
      include: {
        subscription: {
          include: {
            plan: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: { timestamp: 'desc' },
    });

    return usageLogs;
  }
}
