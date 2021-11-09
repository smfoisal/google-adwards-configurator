import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Site from '@/site/site.entity';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private siteRepository: Repository<Site>,
  ) {}

  async findAll(): Promise<Site[]> {
    try {
      return await this.siteRepository.find();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async create(name: string): Promise<Site> {
    try {
      const keywordExists = await Site.findOne({
        where: { name },
      });

      if (keywordExists) {
        throw new BadRequestException('This site name already exists.');
      }

      const newKeyword = Site.create({ name });
      return await Site.save(newKeyword);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<boolean> {
    const keyword = await Site.findOne({ id });
    if (!keyword) throw new NotFoundException(`Site ${id} is not found`);
    await keyword.remove();
    return true;
  }
}
