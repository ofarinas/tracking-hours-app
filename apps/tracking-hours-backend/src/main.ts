/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const globalPrefix = 'api';
const port = process.env.PORT || 3000;

Logger.log(
  `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
}

bootstrap();
