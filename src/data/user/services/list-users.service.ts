import { Injectable } from '@nestjs/common';

import { UserRepositoryInterface } from '@/data/user/repositories/user-repository.interface';
import { User } from '@/domain/user/entities/user';
import { ListUsersUseCaseInterface } from '@/domain/user/usecases/list-users.interface';

@Injectable()
export class ListUsersService implements ListUsersUseCaseInterface {
  constructor(private readonly repository: UserRepositoryInterface) {}

  execute(): Promise<User[]> {
    return this.repository.list();
  }
}
