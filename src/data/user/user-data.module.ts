import { Module, Provider } from '@nestjs/common';

import { UserRepositoryInterface } from '@/data/user/repositories/user-repository.interface';
import { CreateUserUseCaseInterface } from '@/domain/user/usecases/create-user.interface';
import { ListUsersUseCaseInterface } from '@/domain/user/usecases/list-users.interface';
import { MySqlModule } from '@/infra/mysql/mysql.module';
import { UserRepositoryImpl } from '@/infra/mysql/repositories/user-repository';

import { CreateUserService } from './services/create-user.service';
import { ListUsersService } from './services/list-users.service';

const providers: Provider[] = [
  {
    provide: UserRepositoryInterface,
    useClass: UserRepositoryImpl,
  },
  {
    provide: ListUsersUseCaseInterface,
    useClass: ListUsersService,
  },
  {
    provide: CreateUserUseCaseInterface,
    useClass: CreateUserService,
  },
];

@Module({
  imports: [MySqlModule],
  providers,
  exports: providers,
})
export class UserDataModule {}
