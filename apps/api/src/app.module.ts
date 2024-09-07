import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config';
import { GolemModule } from './golem';

@Module({
  imports: [AppConfigModule, GolemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
