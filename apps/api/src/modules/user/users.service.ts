import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../../prisma.service';
import { hash } from 'bcryptjs';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    this.logger.log(
      `Attempting to create user: ${JSON.stringify(createUserDto)}`,
    );

    try {
      const saltRounds = 10;
      const hashedPassword = await hash(createUserDto.password, saltRounds);

      const user = await this.prisma.user.create({
        data: {
          name: createUserDto.name,
          email: createUserDto.email,
          role: createUserDto.role,
          password: hashedPassword,
        },
      });

      this.logger.log(`User created successfully: ${JSON.stringify(user)}`);
      return user;
    } catch (error) {
      this.logger.error('Error creating user', error);
      throw new InternalServerErrorException(
        'Error interno del servidor al crear el usuario.',
      );
    }
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        assignedClients: {
          include: {
            client: true,
          },
        },
      },
    });
  }

  findAllSEs(): Promise<User[]> {
    return this.prisma.user.findMany({ where: { role: 'SE' } });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        assignedClients: {
          include: {
            client: true,
          },
        },
      },
    });
  }

  async findClientUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        clientUsers: {
          include: {
            client: true,
          },
        },
      },
    });
    const { clientUsers, ...rest } = user;
    const client = clientUsers[0]?.client;
    return { ...rest, client };
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { assignedClients, ...rest } = updateUserDto;
    try {
      return await this.prisma.user.update({
        where: { id },
        data: {
          name: rest.name,
          email: rest.email,
          role: rest.role,
          costRate: rest.costRate,
          billRate: rest.billRate,
          assignedClients: {
            deleteMany: {},
            create: assignedClients.map((clientId) => ({
              client: { connect: { id: clientId } },
            })),
          },
        },
      });
    } catch (error) {
      this.logger.error('Error updating user', error);
      throw new InternalServerErrorException('Error updating user.');
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      this.logger.error('Error deleting user', error);
      throw new InternalServerErrorException('Error deleting user.');
    }
  }
}
