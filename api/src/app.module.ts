/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable node/no-process-env */
/* eslint-disable unicorn/import-style */
/* eslint-disable unicorn/prefer-module */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as connectionOptions from './ormconfig';

const join = require('path').join;

import { KeywordModule } from '@/keyword/keyword.module';
import { SiteModule } from '@/site/site.module';

const modules = [KeywordModule, SiteModule];

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.forRoot({}),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: process.env.ENABLE_PLAYGROUND === 'true',
      context: ({ req }) => ({ req }),
    }),
    TypeOrmModule.forRoot(connectionOptions),
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
