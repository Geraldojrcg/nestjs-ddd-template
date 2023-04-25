import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateUserUseCaseInterface } from '@/domain/user/usecases/create-user.interface';
import { ListUsersUseCaseInterface } from '@/domain/user/usecases/list-users.interface';

import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly listUsersUsecase: ListUsersUseCaseInterface,
    private readonly createUserUsecase: CreateUserUseCaseInterface,
  ) {}

  @Get()
  async findAll(): Promise<UserDto[]> {
    const users = await this.listUsersUsecase.execute();
    return users.map((u) => ({ id: u.id, name: u.name, email: u.email }));
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() body: CreateUserDto): Promise<UserDto> {
    const user = await this.createUserUsecase.execute(body);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
