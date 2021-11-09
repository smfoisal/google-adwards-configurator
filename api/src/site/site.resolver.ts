import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import Site from '@/site/site.entity';
import { SiteService } from './site.service';

@Resolver()
export class SiteResolver {
  constructor(private siteService: SiteService) {}

  @Query(() => [Site])
  sites(): Promise<Site[]> {
    return this.siteService.findAll();
  }

  @Mutation(() => Site)
  addSite(@Args('name') name: string): Promise<Site> {
    return this.siteService.create(name);
  }

  @Mutation(() => Boolean)
  removeSite(@Args('id') id: number): Promise<boolean> {
    return this.siteService.remove(id);
  }
}
