/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable node/no-process-env */
/* eslint-disable unicorn/prefer-module */
import { ConnectionOptions } from 'typeorm';
import Keyword from '@/keyword/keyword.entity';
import Site from '@/site/site.entity';

require('dotenv').config();

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_USER_PASS,
  database: process.env.MYSQL_DATABASE_NAME,
  entities: [Keyword, Site],
  debug: false,
  synchronize: true,
  migrations: process.env.TYPEORM_CLI === 'true' ? ['migrations/*.ts'] : [],
  cli: {
    migrationsDir: 'migrations',
  },
};

export = connectionOptions;
