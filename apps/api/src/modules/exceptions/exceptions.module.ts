import { Module } from '@nestjs/common';
import { ExceptionsService } from './exceptions.service';
import { ExceptionsController } from './exceptions.controller';
import { PrismaService } from '@/prisma.service';

@Module({
  controllers: [ExceptionsController],
  providers: [ExceptionsService, PrismaService],
  exports: [ExceptionsService],
})
export class ExceptionsModule {}
