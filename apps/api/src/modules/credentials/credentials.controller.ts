import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole, CredentialService } from '@schema';

@Controller('credentials')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SE)
  create(@Body() createCredentialDto: CreateCredentialDto) {
    return this.credentialsService.create(createCredentialDto);
  }

  @Get('clients/:clientId')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findAll(@Param('clientId', ParseUUIDPipe) clientId: string) {
    return this.credentialsService.findAll(clientId);
  }

  @Get(':id')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.credentialsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.SE)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCredentialDto: UpdateCredentialDto,
  ) {
    return this.credentialsService.update(id, updateCredentialDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN, UserRole.SE)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.credentialsService.remove(id);
  }

  @Post(':id/validate')
  @Roles(UserRole.ADMIN, UserRole.SE)
  validateCredential(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('service') service: CredentialService,
  ) {
    return this.credentialsService.validateCredential(id, service);
  }

  @Get('clients/:clientId/status')
  @Roles(UserRole.ADMIN, UserRole.SE, UserRole.CLIENT)
  getServiceStatus(
    @Param('clientId', ParseUUIDPipe) clientId: string,
    @Query('service') service: CredentialService,
  ) {
    return this.credentialsService.getServiceStatus(clientId, service);
  }
} 