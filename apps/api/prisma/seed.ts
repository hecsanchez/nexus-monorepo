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

  // Create Admin user
  await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@acme.com',
      role: UserRole.ADMIN,
      password: hashedPassword,
    },
  });

  // 1. Create Plans
  const enterprisePro = await prisma.plan.create({
    data: {
      name: 'Enterprise Pro',
      description: 'Top-tier plan for large organizations',
      pricePerCredit: 0, // Not used for tiered
      contractLength: 12,
      cadence: PlanCadence.MONTHLY,
      setupFee: 5000,
      cap: 100000,
      overageCost: 150,
      creditsPerPeriod: null,
      prepaymentPercentage: 25,
      usageApi: 'AIR Direct',
    },
  });
  // Business Plus
  await prisma.plan.create({
    data: {
      name: 'Business Plus',
      description: 'Fixed plan for growing businesses',
      pricePerCredit: 0, // Not used for fixed
      contractLength: 6,
      cadence: PlanCadence.QUARTERLY,
      setupFee: 2500,
      cap: 50000,
      overageCost: 125,
      creditsPerPeriod: null,
      prepaymentPercentage: 15,
      usageApi: 'AIR Direct',
    },
  });
  // Starter
  await prisma.plan.create({
    data: {
      name: 'Starter',
      description: 'Entry-level plan for small teams',
      pricePerCredit: 0, // Not used for usage
      contractLength: 3,
      cadence: PlanCadence.MONTHLY,
      setupFee: 1000,
      cap: 25000,
      overageCost: 100,
      creditsPerPeriod: null,
      prepaymentPercentage: 10,
      usageApi: 'AIR Direct',
    },
  });

  // Create SE users
  const se1 = await prisma.user.create({
    data: {
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: UserRole.SE,
      password: hashedPassword,
    },
  });
  const se2 = await prisma.user.create({
    data: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: UserRole.SE,
      password: hashedPassword,
    },
  });

  // Create client users first
  const user1 = await prisma.user.create({
    data: {
      name: 'Robert Wilson',
      email: 'robert@company.com',
      phone: '+1 555-0123',
      role: UserRole.CLIENT,
      password: hashedPassword,
    },
  });
  const user2 = await prisma.user.create({
    data: {
      name: 'Emily Brown',
      email: 'emily@company.com',
      phone: '+1 555-0124',
      role: UserRole.CLIENT,
      password: hashedPassword,
    },
  });

  // 2. Create a Client
  const client = await prisma.client.create({
    data: {
      name: 'Acme, Inc.',
      url: 'https://acme.com',
      contractStart: new Date('2025-01-15'),
      active: true,
      subscriptions: {
        create: [
          {
            planId: enterprisePro.id,
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
      subscriptions: true,
      credentials: true,
      documents: true,
    },
  });

  await prisma.paymentMethod.create({
    data: {
      clientId: client.id,
      type: 'visa',
      last4: '4242',
      expMonth: 12,
      expYear: 2025,
      brand: 'Visa',
      isDefault: true,
    },
  });

  // Create departments for the client
  const engineeringDept = await prisma.department.create({
    data: {
      name: 'Engineering',
      clientId: client.id,
    },
  });
  const salesDept = await prisma.department.create({
    data: {
      name: 'Sales',
      clientId: client.id,
    },
  });

  // Link users to client via ClientUser join table
  await prisma.clientUser.create({
    data: {
      clientId: client.id,
      userId: user1.id,
      isAdmin: true,
      canBilling: true,
      notes: 'Primary contact',
      departmentId: engineeringDept.id,
    },
  });
  await prisma.clientUser.create({
    data: {
      clientId: client.id,
      userId: user2.id,
      isAdmin: false,
      canBilling: false,
      notes: 'Technical lead',
      departmentId: salesDept.id,
    },
  });

  // Link SEs to client
  await prisma.clientsOnSEs.create({
    data: {
      clientId: client.id,
      seId: se1.id,
    },
  });
  await prisma.clientsOnSEs.create({
    data: {
      clientId: client.id,
      seId: se2.id,
    },
  });

  // 7 document links
  const docTypes = Object.values(DocumentType);
  for (const type of docTypes) {
    await prisma.documentLink.create({
      data: {
        clientId: client.id,
        type,
        url: `https://acme.com/${type}.pdf`,
      },
    });
  }

  // 11 pipeline steps (first 3 completed)
  const pipelineLabels = [
    'Discovery: Initial Survey',
    'Discovery: Process Deep Dive',
    'ADA Proposal Sent',
    'ADA Proposal Review',
    'ADA Contract Sent',
    'ADA Contract Signed',
    'Credentials Collected',
    'Factory Build Initiated',
    'Test Plan Generated',
    'Testing Started',
    'Production Deploy',
  ];
  for (let i = 0; i < pipelineLabels.length; i++) {
    await prisma.pipelineStep.create({
      data: {
        clientId: client.id,
        label: pipelineLabels[i],
        order: i,
        completedAt: i < 3 ? new Date(`2025-01-${15 + i * 5}`) : null,
      },
    });
  }

  // 3. Create a Department
  const department = await prisma.department.create({
    data: {
      name: 'Engineering',
      clientId: client.id,
    },
  });

  // 4. Create Workflows for the Department (and Client)
  await prisma.workflow.create({
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

  await prisma.workflow.create({
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
