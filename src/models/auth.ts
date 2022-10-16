import { CreateUserDto } from './user';
export type AuthId = number;

export type CreateAuthDto = {
  login: string;
  email: string;
  password: string;
};

export type SignInDto = {
  email: string;
  password: string;
};

export type SignUpDto = {
  auth: CreateAuthDto;
  user: CreateUserDto;
};

export type UpdateAuthDto = CreateAuthDto & {
  isBanned: boolean;
  banReason: string;
};

export type Auth = UpdateAuthDto & {
  id: AuthId;
  refreshToken: string;
  userId: number;
};
