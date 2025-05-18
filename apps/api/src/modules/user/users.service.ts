import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../../prisma.service';
import { hash } from 'bcryptjs';
import { User, UserRole } from '@schema';

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
    return this.prisma.user.findMany();
  }

  findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
