import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth';
import { AppConfigModule } from './config';
import { DbModule } from './db';
import { GolemModule } from './golem';
import { UserModule } from './user';

@Module({
  imports: [AppConfigModule, DbModule, AuthModule, GolemModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
