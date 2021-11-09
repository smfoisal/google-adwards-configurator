import { Controller, Get, Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Controller()
export class AppController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Get()
  getHello(): string {
    this.logger.info({ name: 'test name', value: 'test value' });
    this.logger.info('hello world');
    this.logger.warn('test warning');
    this.logger.error('Error', 'stack');
    return 'hello';
  }
}
