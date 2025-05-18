import {
  Controller,
  Post,
  Body,
  Logger,
  Res,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';

interface ExtendedRequest extends Request {
  user: {
    sid: string;
    email: string;
  };
  headers: {
    origin: string;
    delete(key: string): void;
    get(key: string): string | null;
    set(key: string, value: string): void;
    has(key: string): boolean;
    keys(): NodeJS.Iterator<string>;
    values(): NodeJS.Iterator<string>;
    entries(): NodeJS.Iterator<[string, string]>;
    append(key: string, value: string): void;
    getSetCookie(): string[];
    forEach(
      callback: (value: string, key: string, parent: Headers) => void,
    ): void;
    [Symbol.iterator](): IterableIterator<[string, string]>;
  };
}

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: { email: string; password: string },
    @Req() req: ExtendedRequest,
    @Res() res: Response,
  ) {
    this.logger.log('Logging in ', JSON.stringify(loginDto));
    const authResponse = await this.authService.login(loginDto);

    const domain =
      process.env.NODE_ENV === 'development' ? 'localhost' : process.env.HOST;

    res.cookie('accessToken', authResponse.accessToken, {
      secure: process.env.NODE_ENV !== 'development',
      domain,
      sameSite: 'lax',
    });

    res.json({});
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  async refreshToken(@Req() req: ExtendedRequest, @Res() res: Response) {
    const newTokens = await this.authService.refreshToken(
      req.user.sid,
      req.user.email,
    );

    res.cookie('accessToken', newTokens.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      domain: process.env.APP_URL,
      sameSite: 'lax',
      path: '/',
    });

    res.json({});
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Res() res: Response) {
    res.clearCookie('accessToken', {
      secure: process.env.NODE_ENV !== 'development',
      domain: process.env.APP_URL,
      sameSite: 'lax',
      path: '/',
    });
    res.json({});
  }
}
