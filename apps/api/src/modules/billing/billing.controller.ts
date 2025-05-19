import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole, InvoiceStatus } from '@prisma/client';
import { StripeService } from './stripe.service';
import { ConfigService } from '@nestjs/config';

@Controller('billing')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly stripeService: StripeService,
    private readonly configService: ConfigService,
  ) {}

  // Plan endpoints
  @Post('plans')
  @Roles(UserRole.ADMIN)
  createPlan(@Body() createPlanDto: CreatePlanDto) {
    return this.billingService.createPlan(createPlanDto);
  }

  @Get('plans')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findAllPlans() {
    return this.billingService.findAllPlans();
  }

  @Get('plans/:id')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findPlan(@Param('id', ParseUUIDPipe) id: string) {
    return this.billingService.findPlan(id);
  }

  // Subscription endpoints
  @Post('subscriptions')
  @Roles(UserRole.ADMIN, UserRole.SE)
  createSubscription(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.billingService.createSubscription(createSubscriptionDto);
  }

  @Get('clients/:clientId/subscriptions')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findClientSubscriptions(@Param('clientId', ParseUUIDPipe) clientId: string) {
    return this.billingService.findClientSubscriptions(clientId);
  }

  @Patch('subscriptions/:id/status')
  @Roles(UserRole.ADMIN)
  updateSubscriptionStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('status') status: string,
  ) {
    return this.billingService.updateSubscriptionStatus(id, status);
  }

  // Invoice endpoints
  @Post('invoices')
  @Roles(UserRole.ADMIN)
  createInvoice(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.billingService.createInvoice(createInvoiceDto);
  }

  @Get('clients/:clientId/invoices')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findClientInvoices(@Param('clientId', ParseUUIDPipe) clientId: string) {
    return this.billingService.findClientInvoices(clientId);
  }

  @Patch('invoices/:id/status')
  @Roles(UserRole.ADMIN)
  updateInvoiceStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('status') status: InvoiceStatus,
  ) {
    return this.billingService.updateInvoiceStatus(id, status);
  }

  // Usage and credits endpoints
  @Get('clients/:clientId/credits')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getClientCredits(@Param('clientId', ParseUUIDPipe) clientId: string) {
    return this.billingService.getClientCredits(clientId);
  }

  @Post('clients/:clientId/usage')
  @Roles(UserRole.ADMIN, UserRole.SE)
  recordUsage(
    @Param('clientId', ParseUUIDPipe) clientId: string,
    @Body('credits') credits: number,
    @Body('description') description: string,
  ) {
    return this.billingService.recordUsage(clientId, credits, description);
  }

  @Get('clients/:clientId/usage')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getClientUsageHistory(
    @Param('clientId', ParseUUIDPipe) clientId: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.billingService.getClientUsageHistory(
      clientId,
      startDate ? new Date(startDate) : undefined,
      endDate ? new Date(endDate) : undefined,
    );
  }

  @Get('clients/:clientId/overview')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  async getClientBillingOverview(
    @Param('clientId', ParseUUIDPipe) clientId: string,
  ) {
    return this.billingService.getClientBillingOverview(clientId);
  }

  @Get('clients/:clientId/stripe/setup-intent')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  async createSetupIntent(@Param('clientId', ParseUUIDPipe) clientId: string) {
    // In a real app, you would look up the client and their email/name
    // For demo, just use dummy values
    const customer = await this.stripeService.getOrCreateCustomer(
      clientId,
      `client${clientId}@example.com`,
      `Client ${clientId}`,
    );
    const setupIntent = await this.stripeService['stripe'].setupIntents.create({
      customer: customer.id,
    });
    return { clientSecret: setupIntent.client_secret };
  }

  @Post('clients/:clientId/stripe/save-payment-method')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  async savePaymentMethod(
    @Param('clientId', ParseUUIDPipe) clientId: string,
    @Body('paymentMethodId') paymentMethodId: string,
    @Body('email') email: string,
    @Body('name') name: string,
  ) {
    // Attach the payment method to the customer and set as default
    const customer = await this.stripeService.getOrCreateCustomer(
      clientId,
      email,
      name,
    );
    const pm = await this.stripeService['stripe'].paymentMethods.attach(
      paymentMethodId,
      { customer: customer.id },
    );
    await this.stripeService['stripe'].customers.update(customer.id, {
      invoice_settings: { default_payment_method: pm.id },
    });
    // Save the payment method details in your DB
    await this.billingService.savePaymentMethodToDb(clientId, pm);
    return { success: true };
  }
}
