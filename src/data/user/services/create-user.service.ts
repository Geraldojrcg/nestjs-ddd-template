import { Injectable } from '@nestjs/common';

import { UserRepositoryInterface } from '@/data/user/repositories/user-repository.interface';
import { User } from '@/domain/user/entities/user';
import {
  CreateUserParams,
  CreateUserUseCaseInterface,
} from '@/domain/user/usecases/create-user.interface';

@Injectable()
export class CreateUserService implements CreateUserUseCaseInterface {
  constructor(private readonly repository: UserRepositoryInterface) {}

  async execute({ name, email }: CreateUserParams): Promise<User> {
    const user = new User({ name, email });
    await this.repository.save(user);
    return user;
  }
}
