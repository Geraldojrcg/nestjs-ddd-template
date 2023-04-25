import { User } from '../entities/user';

export type CreateUserParams = {
  name: string;
  email: string;
};

export abstract class CreateUserUseCaseInterface {
  abstract execute(params: CreateUserParams): Promise<User>;
}
