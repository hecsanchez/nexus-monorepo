import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { Credential, CredentialService, CredentialStatus } from '@prisma/client';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';

@Injectable()
export class CredentialsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCredentialDto: CreateCredentialDto): Promise<Credential> {
    try {
      // Verify client exists
      const client = await this.prisma.client.findUnique({
        where: { id: createCredentialDto.clientId },
      });

      if (!client) {
        throw new BadRequestException('Client not found');
      }

      // Check for existing credential of same service
      const existingCredential = await this.prisma.credential.findFirst({
        where: {
          clientId: createCredentialDto.clientId,
          service: createCredentialDto.service,
        },
      });

      if (existingCredential) {
        throw new BadRequestException(
          `Credential for ${createCredentialDto.service} already exists`,
        );
      }

      return await this.prisma.credential.create({
        data: createCredentialDto,
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Failed to create credential',
      );
    }
  }

  async findAll(clientId: string): Promise<Credential[]> {
    return this.prisma.credential.findMany({
      where: { clientId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<Credential> {
    const credential = await this.prisma.credential.findUnique({
      where: { id },
    });

    if (!credential) {
      throw new NotFoundException(`Credential with ID ${id} not found`);
    }

    return credential;
  }

  async update(
    id: string,
    updateCredentialDto: UpdateCredentialDto,
  ): Promise<Credential> {
    try {
      return await this.prisma.credential.update({
        where: { id },
        data: updateCredentialDto,
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Failed to update credential',
      );
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.credential.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Failed to delete credential',
      );
    }
  }

  async validateCredential(
    id: string,
    service: CredentialService,
  ): Promise<boolean> {
    const credential = await this.findOne(id);

    if (credential.service !== service) {
      throw new BadRequestException(`Credential is not for service ${service}`);
    }

    // TODO: Implement actual validation for each service type
    // This would involve:
    // 1. Checking the credential's config
    // 2. Making a test API call to the service
    // 3. Updating the status based on the result
    return true;
  }

  async getServiceStatus(
    clientId: string,
    service: CredentialService,
  ): Promise<CredentialStatus> {
    const credential = await this.prisma.credential.findFirst({
      where: {
        clientId,
        service,
      },
    });

    return credential?.status || CredentialStatus.DISCONNECTED;
  }
}
