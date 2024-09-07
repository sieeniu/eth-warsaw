/* eslint-disable @typescript-eslint/no-magic-numbers */
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8081);
}

void bootstrap();
