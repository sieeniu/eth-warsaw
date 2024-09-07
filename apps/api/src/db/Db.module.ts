import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfigService } from '../config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => {
        const dbConfig = config.getInferred('db');
        return {
          type: 'postgres',
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.user,
          password: dbConfig.password,
          database: dbConfig.database,
          ssl: {
            rejectUnauthorized: false,
          },
          entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
    }),
  ],
  providers: [],
})
export class DbModule {}
