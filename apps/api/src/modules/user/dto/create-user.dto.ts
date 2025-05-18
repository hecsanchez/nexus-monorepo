import { UserRole } from '@schema';

export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  role: UserRole;
}
