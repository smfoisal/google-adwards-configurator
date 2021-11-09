import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Keyword from '@/keyword/keyword.entity';

@Injectable()
export class KeywordService {
  constructor(
    @InjectRepository(Keyword)
    private keywordRepository: Repository<Keyword>,
  ) {}

  async findAll(): Promise<Keyword[]> {
    try {
      return await Keyword.find();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async create(name: string): Promise<Keyword> {
    try {
      const keywordExists = await Keyword.findOne({
        where: { name },
      });

      if (keywordExists) {
        throw new BadRequestException('This keyword already exists.');
      }

      const newKeyword = Keyword.create({ name });
      return await Keyword.save(newKeyword);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<boolean> {
    const keyword = await Keyword.findOne({ id });
    if (!keyword) throw new NotFoundException(`Keyword ${id} is not found`);
    await keyword.remove();
    return true;
  }
}
