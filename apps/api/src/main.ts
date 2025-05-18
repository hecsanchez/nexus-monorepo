import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar nivel de logs
  app.useLogger(['debug', 'error', 'log', 'verbose', 'warn']);

  app.enableCors({
    origin: process.env.APP_URL,
    credentials: true,
  });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  app.useBodyParser('json', { limit: '50mb' });

  await app.listen(3000);
}
bootstrap();
