import { Entity, Column } from 'typeorm';
import { Length, Min } from 'class-validator';

import { BaseEntity } from '../../base';

@Entity()
export class Book extends BaseEntity {
  @Column()
  @Length(3, 100)
  title!: String;

  @Column()
  @Length(3, 255)
  description!: String;

  @Column()
  @Min(1)
  pages!: Number;
}
