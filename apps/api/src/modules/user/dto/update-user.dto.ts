import { User, UserRole } from '@prisma/client';

export class UpdateUserDto implements Partial<User> {
  name: string;
  email: string;
  role: UserRole;
  costRate: number;
  billRate: number;
  assignedClients: string[];
}
