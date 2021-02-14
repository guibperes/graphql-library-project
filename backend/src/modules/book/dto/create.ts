import { Length, Min } from 'class-validator';

export class BookCreateDTO {
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

  static of(bookCreateDTO: BookCreateDTO): BookCreateDTO {
    return new BookCreateDTO(
      bookCreateDTO.title,
      bookCreateDTO.description,
      bookCreateDTO.pages
    );
  }
}
