import { Entity, Column } from 'typeorm';
import { Length, Min } from 'class-validator';

import { BaseEntity } from '../../base';
import { BookDTO } from './dto';

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

  private constructor(title: String, description: String, pages: Number) {
    super();

    this.title = title;
    this.description = description;
    this.pages = pages;
  }

  static of(bookDTO: BookDTO): Book {
    return new Book(bookDTO.title, bookDTO.description, bookDTO.pages);
  }
}
