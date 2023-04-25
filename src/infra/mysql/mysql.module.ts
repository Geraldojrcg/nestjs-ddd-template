import { Module } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

export const DATABASE_PROVIDER = 'DATABASE_PROVIDER';

const databaseProvider = {
  provide: DATABASE_PROVIDER,
  useFactory: async () => {
    const connection = await mysql.createConnection({
      host: 'db',
      user: 'root',
      password: '123',
      database: 'test',
    });
    return connection;
  },
};

@Module({
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class MySqlModule {}
