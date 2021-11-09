import { Module } from '@nestjs/common';
import { KeywordService } from './keyword.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Keyword from '@/keyword/keyword.entity';
import { KeywordResolver } from './keyword.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword])],
  providers: [KeywordService, KeywordResolver],
  exports: [KeywordService],
})
export class KeywordModule {}
