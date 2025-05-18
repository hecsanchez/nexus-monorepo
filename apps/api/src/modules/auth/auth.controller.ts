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

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: { email: string; password: string },
    @Res() res: Response,
  ) {
    this.logger.log('Logging in ', JSON.stringify(loginDto));
    const authResponse = await this.authService.login(loginDto);

    res.cookie('accessToken', authResponse.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      domain: process.env.APP_URL,
      sameSite: 'lax',
      path: '/',
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
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      domain: process.env.APP_URL,
      sameSite: 'lax',
      path: '/',
    });
    res.json({});
  }
}
