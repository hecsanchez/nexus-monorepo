import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@/prisma.service';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  private readonly logger = new Logger(StripeService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const secretKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY is not defined');
    }
    this.stripe = new Stripe(secretKey, { apiVersion: '2025-04-30.basil' });
  }

  /**
   * Create a Stripe customer for a client if one doesn't exist, or return the existing one.
   * Now stores the Stripe customer ID in the Client model.
   */
  async getOrCreateCustomer(clientId: string, email: string, name: string) {
    const client = await this.prisma.client.findUnique({ where: { id: clientId } });
    if (!client) throw new Error('Client not found');
    if (client.stripeCustomerId) {
      try {
        const customer = await this.stripe.customers.retrieve(client.stripeCustomerId);
        if ((customer as any).deleted) throw new Error('Stripe customer deleted');
        return customer;
      } catch (err) {
        this.logger.warn(`Stripe customer not found for client ${clientId}, creating new one.`);
      }
    }
    const customer = await this.stripe.customers.create({
      email,
      name,
      metadata: { clientId },
    });
    await this.prisma.client.update({
      where: { id: clientId },
      data: { stripeCustomerId: customer.id },
    });
    return customer;
  }

  /**
   * Attach a payment method to a customer and set as default.
   */
  async attachPaymentMethod(clientId: string, paymentMethodId: string, email: string, name: string) {
    const customer = await this.getOrCreateCustomer(clientId, email, name);
    try {
      const pm = await this.stripe.paymentMethods.attach(paymentMethodId, { customer: customer.id });
      await this.stripe.customers.update(customer.id, { invoice_settings: { default_payment_method: pm.id } });
      return pm;
    } catch (err) {
      this.logger.error(`Failed to attach payment method: ${err}`);
      throw err;
    }
  }

  /**
   * Retrieve a payment method (for example, to display its last4 or brand) using its id (pm_xxx).
   */
  async getPaymentMethod(paymentMethodId: string) {
    try {
      return await this.stripe.paymentMethods.retrieve(paymentMethodId);
    } catch (err) {
      this.logger.error(`Failed to retrieve payment method: ${err}`);
      throw err;
    }
  }
}
