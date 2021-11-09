import { Field, ObjectType } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

@ObjectType()
@Entity()
export default class Keyword extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column({ type: 'varchar', unique: true })
  name: string;

  @Field()
  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;
}
