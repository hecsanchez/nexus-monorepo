import { Controller, Get, Logger, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';

@Controller('me')
@UseGuards(JwtAuthGuard)
export class MeController {
  private readonly logger = new Logger(MeController.name);
  constructor(private readonly userService: UsersService) {}

  @Get('')
  getUserDetails(@Req() req: ExtendedRequest) {
    const userId = req.user.id;
    return this.userService.findClientUser(userId);
  }
}
