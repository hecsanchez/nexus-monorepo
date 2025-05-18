import {
  PrismaClient,
  UserRole,
  ExceptionSeverity,
  ExceptionStatus,
  WorkflowStatus,
  InvoiceStatus,
  CredentialService,
  CredentialStatus,
  PlanCadence,
  DocumentType,
} from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Hash the password for the seed user
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash('P@ssword123', saltRounds);

  // 1. Create a Plan
  const plan = await prisma.plan.create({
    data: {
      name: 'Pro',
      description: 'Pro plan',
      pricePerCredit: 10,
      contractLength: 12,
      cadence: PlanCadence.MONTHLY,
    },
  });

  // 2. Create a Client
  const client = await prisma.client.create({
    data: {
      url: 'https://acme.com',
      contractStart: new Date('2025-01-15'),
      active: true,
      user: {
        create: {
          name: 'Jane Doe',
          email: 'jane@acme.com',
          role: UserRole.CLIENT,
          password: hashedPassword,
        },
      },
      subscriptions: {
        create: [
          {
            planId: plan.id,
            status: 'ACTIVE',
            createdAt: new Date('2025-01-15'),
            invoices: {
              create: [
                {
                  issueDate: new Date('2025-01-15'),
                  dueDate: new Date('2025-02-15'),
                  amount: 24500,
                  status: InvoiceStatus.PAID,
                  description: 'Monthly subscription fee',
                },
              ],
            },
          },
        ],
      },
      credentials: {
        create: [
          {
            service: CredentialService.SLACK,
            status: CredentialStatus.CONNECTED,
          },
        ],
      },
      documents: {
        create: [
          {
            type: DocumentType.CONTRACT,
            url: 'https://acme.com/contract.pdf',
          },
        ],
      },
    },
    include: {
      user: true,
      subscriptions: true,
      credentials: true,
      documents: true,
    },
  });

  // 3. Create a Department
  const department = await prisma.department.create({
    data: {
      name: 'Engineering',
      clientId: client.id,
    },
  });

  // 4. Create Workflows for the Department (and Client)
  const workflow1 = await prisma.workflow.create({
    data: {
      name: 'ETL Pipeline',
      description: 'Acme ETL',
      active: true,
      timeSavedPerExecution: 12,
      moneySavedPerExecution: 100,
      status: WorkflowStatus.ACTIVE,
      departmentId: department.id,
      clientId: client.id,
      nodes: {
        create: [
          { name: 'Extract', type: 'extractor' },
          { name: 'Transform', type: 'transformer' },
          { name: 'Load', type: 'loader' },
        ],
      },
      logs: {
        create: [
          { status: 'SUCCESS', timestamp: new Date('2025-05-15') },
          { status: 'SUCCESS', timestamp: new Date('2025-05-16') },
        ],
      },
      exceptions: {
        create: [
          {
            type: 'DataError',
            severity: ExceptionSeverity.HIGH,
            remedy: 'Check data source',
            status: ExceptionStatus.RESOLVED,
            timestamp: new Date('2025-05-15'),
          },
        ],
      },
    },
  });

  const workflow2 = await prisma.workflow.create({
    data: {
      name: 'Data Sync',
      description: 'Sync data nightly',
      active: true,
      timeSavedPerExecution: 8,
      moneySavedPerExecution: 50,
      status: WorkflowStatus.ACTIVE,
      departmentId: department.id,
      clientId: client.id,
      nodes: {
        create: [{ name: 'Sync', type: 'syncer' }],
      },
      logs: {
        create: [{ status: 'SUCCESS', timestamp: new Date('2025-05-16') }],
      },
      exceptions: {
        create: [
          {
            type: 'Timeout',
            severity: ExceptionSeverity.LOW,
            remedy: 'Increase timeout',
            status: ExceptionStatus.RESOLVED,
            timestamp: new Date('2025-05-16'),
          },
        ],
      },
    },
  });

  console.log('Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
