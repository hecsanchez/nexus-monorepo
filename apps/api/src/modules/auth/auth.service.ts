import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private userService: UsersService,
  ) {}

  async login(data: { email: string; password: string }) {
    this.logger.log('userInfo', JSON.stringify(data));
    const user = await this.userService.findByEmail(data.email);

    this.logger.log('user', JSON.stringify(user));
    if (!user) {
      throw new UnauthorizedException();
    }

    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(data.password, saltRounds);
    this.logger.debug('encryptedPassword', encryptedPassword);

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    this.logger.debug('isPasswordValid', isPasswordValid);
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { sid: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '1d',
    });

    return {
      accessToken,
    };
  }

  async refreshToken(userSid: string, email: string) {
    try {
      const newPayload = { sid: userSid, email };
      const accessToken = await this.jwtService.signAsync(newPayload, {
        expiresIn: '1d',
      });

      return { accessToken };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
