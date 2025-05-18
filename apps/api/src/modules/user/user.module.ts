import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { MeController } from './me.controller';
import { PrismaService } from '@/prisma.service';

@Module({
  controllers: [UserController, MeController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}