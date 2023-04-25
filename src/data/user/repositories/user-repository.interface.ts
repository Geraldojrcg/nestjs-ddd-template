import { User } from '../../../domain/user/entities/user';

export abstract class UserRepositoryInterface {
  abstract list(): Promise<User[]>;
  abstract save(user: User): Promise<void>;
}
