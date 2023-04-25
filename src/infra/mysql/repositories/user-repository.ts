import { Inject, Injectable } from '@nestjs/common';
import { Connection, RowDataPacket } from 'mysql2/promise';

import { UserRepositoryInterface } from '@/data/user/repositories/user-repository.interface';
import { User } from '@/domain/user/entities/user';

import { DATABASE_PROVIDER } from '../mysql.module';

@Injectable()
export class UserRepositoryImpl implements UserRepositoryInterface {
  constructor(@Inject(DATABASE_PROVIDER) private readonly conn: Connection) {}

  async list(): Promise<User[]> {
    const [rows] = await this.conn.query('SELECT * FROM users;');
    return (rows as RowDataPacket[]).map(
      (res) =>
        new User({
          id: res.id,
          name: res.name,
          email: res.email,
        }),
    );
  }

  async save(user: User): Promise<void> {
    await this.conn.execute('INSERT INTO users (name, email) VALUES (?, ?);', [
      user.name,
      user.email,
    ]);
  }
}
