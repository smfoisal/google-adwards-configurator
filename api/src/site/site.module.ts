import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Site from '@/site/site.entity';
import { SiteService } from '@/site/site.service';
import { SiteResolver } from '@/site/site.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Site])],
  providers: [SiteService, SiteResolver],
  exports: [SiteService],
})
export class SiteModule {}
