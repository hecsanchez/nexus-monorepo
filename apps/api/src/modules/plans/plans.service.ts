import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { PlanCadence } from '@prisma/client';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.plan.findMany();
  }

  create(data: CreatePlanDto) {
    return this.prisma.plan.create({
      data: {
        ...data,
        cadence: data.cadence as PlanCadence,
      },
    });
  }
}
