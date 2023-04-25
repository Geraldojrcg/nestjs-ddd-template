import { Module } from '@nestjs/common';

import { UserPresentationModule } from './presentation/user/user-presentation.module';

@Module({
  imports: [UserPresentationModule],
})
export class AppModule {}
