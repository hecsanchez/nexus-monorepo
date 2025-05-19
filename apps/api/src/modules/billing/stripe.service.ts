import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  private readonly logger = new Logger(StripeService.name);

  constructor(private readonly configService: ConfigService) {
    const secretKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY is not defined');
    }
    this.stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' });
  }

  /**
   * Create a Stripe customer for a client if one doesn't exist, or return the existing one.
   */
  async getOrCreateCustomer(clientId: string, email: string, name: string) {
    // In a real app, you might store the Stripe customer ID in your Client model
    // For now, we'll use the clientId as a metadata field to find the customer
    const customers = await this.stripe.customers.list({
      limit: 1,
      metadata: { clientId },
    });

    if (customers.data.length > 0) {
      return customers.data[0];
    }

    return this.stripe.customers.create({
      email,
      name,
      metadata: { clientId },
    });
  }

  /**
   * Create a payment method (e.g. a card) for a client.
   * In a real app, you'd usually call this from your frontend (using the publishable key) and then pass the payment method id (pm_xxx) to your backend.
   * For demo purposes, we simulate creating a token (using a test card) and then a payment method.
   */
  async createPaymentMethod(
    clientId: string,
    email: string,
    name: string,
    cardToken: string,
  ) {
    const customer = await this.getOrCreateCustomer(clientId, email, name);
    const pm = await this.stripe.paymentMethods.attach(cardToken, {
      customer: customer.id,
    });
    // Optionally, set as the default payment method for the customer
    await this.stripe.customers.update(customer.id, {
      invoice_settings: { default_payment_method: pm.id },
    });
    return pm;
  }

  /**
   * Retrieve a payment method (for example, to display its last4 or brand) using its id (pm_xxx).
   */
  async getPaymentMethod(paymentMethodId: string) {
    return this.stripe.paymentMethods.retrieve(paymentMethodId);
  }

  /**
   * (Demo) Simulate creating a test token (in a real app, you'd use the publishable key on the frontend to create a token or a payment method).
   */
  async createTestToken() {
    const token = await this.stripe.tokens.create({
      card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2025,
        cvc: '123',
      },
    });
    return token;
  }

  /**
   * (Demo) Simulate "creating" a payment method (using a test token) for a client.
   * In a real app, you'd call (or instruct your frontend to call) createPaymentMethod (using a token or a payment method id) instead.
   */
  async simulateCreatePaymentMethod(
    clientId: string,
    email: string,
    name: string,
  ) {
    const token = await this.createTestToken();
    const pm = await this.createPaymentMethod(clientId, email, name, token.id);
    return pm;
  }
}
