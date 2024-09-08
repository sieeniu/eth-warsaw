/* eslint-disable @typescript-eslint/no-magic-numbers */
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_APP_URL ?? 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  await app.listen(8081);
}

void bootstrap();
