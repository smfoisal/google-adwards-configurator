/* eslint-disable node/no-process-env */
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { json } from 'express';
import { AppModule } from '@/app.module';

const DEFAUL_PORT = 4000;

async function bootstrap(): Promise<void> {
  const port = process.env.PORT ? process.env.PORT : DEFAUL_PORT;

  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'debug', 'warn', 'error'],
  });

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*',
  });

  app.use(json({ limit: '100mb' }));
  await app.listen(port);

  Logger.log('##############################################################');
  Logger.log(`HTTP : API server starting on : http://localhost:${port}`);
  Logger.log(`Graphql server starting on : http://localhost:${port}/graphql`);
  Logger.log('##############################################################');
  Logger.log(`MySQL Database`);
  Logger.log('##############################################################');
  Logger.log(`Host: ${process.env.MYSQL_HOST}`);
  Logger.log(`Port: ${process.env.MYSQL_PORT}`);
  Logger.log(`User: ${process.env.MYSQL_USER}`);
  Logger.log(`Database: ${process.env.MYSQL_DATABASE_NAME}`);
  Logger.log('##############################################################');
}
bootstrap();
