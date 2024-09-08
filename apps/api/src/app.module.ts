import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth';
import { AppConfigModule } from './config';
import { DbModule } from './db';
import { GolemModule } from './golem';
import { TasksModule } from './tasks';
import { UserModule } from './user';

@Module({
  imports: [
    AppConfigModule,
    DbModule,
    AuthModule,
    GolemModule,
    UserModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
