import { User } from '../entities/user';

export abstract class ListUsersUseCaseInterface {
  abstract execute(): Promise<User[]>;
}
