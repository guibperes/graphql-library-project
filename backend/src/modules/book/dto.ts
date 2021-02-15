import { Length, Min } from 'class-validator';

export class BookDTO {
  @Length(3, 100)
  title!: String;

  @Length(3, 255)
  description!: String;

  @Min(1)
  pages!: Number;

  private constructor(title: String, description: String, pages: Number) {
    this.title = title;
    this.description = description;
    this.pages = pages;
  }

  static of(bookDTO: BookDTO): BookDTO {
    return new BookDTO(bookDTO.title, bookDTO.description, bookDTO.pages);
  }
}
