import { Module } from '@nestjs/common';

import { UserDataModule } from '@/data/user/user-data.module';

import { UsersController } from './user.controller';

@Module({
  imports: [UserDataModule],
  controllers: [UsersController],
})
export class UserPresentationModule {}
