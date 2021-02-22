import { Length, Min } from 'class-validator';

export class BookCreateDTO {
  @Length(3, 100)
  title!: String;

  @Length(3, 255)
  description!: String;

  @Min(1)
  pages!: Number;

  static of(body: object): BookCreateDTO {
    return Object.assign({} as BookCreateDTO, body);
  }
}
