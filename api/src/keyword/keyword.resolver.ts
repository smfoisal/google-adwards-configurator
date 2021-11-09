import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import Keyword from '@/keyword/keyword.entity';
import { KeywordService } from './keyword.service';

@Resolver()
export class KeywordResolver {
  constructor(private keywordService: KeywordService) {}

  @Query(() => [Keyword])
  keywords(): Promise<Keyword[]> {
    return this.keywordService.findAll();
  }

  @Mutation(() => Keyword)
  addKeyword(@Args('name') name: string): Promise<Keyword> {
    return this.keywordService.create(name);
  }

  @Mutation(() => Boolean)
  removeKeyword(@Args('id') id: number): Promise<boolean> {
    return this.keywordService.remove(id);
  }
}
