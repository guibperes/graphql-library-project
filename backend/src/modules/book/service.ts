import { Database } from '../../database';

import { BookRepository } from './repository';
import { Book } from './entity';
import { BookCreateDTO } from './dto';

const getBookRepository = () => Database.getRepository(BookRepository);

const create = async (bookCreateDTO: BookCreateDTO): Promise<Book> => {
  const repository = getBookRepository();

  const book = Book.of(bookCreateDTO);
  const savedBook = await repository.save(book);

  return savedBook;
};

const findAll = async (): Promise<Book[]> => {
  const repository = getBookRepository();
  const books = await repository.find();

  return books;
};

const findById = async (id: string): Promise<Book | undefined> => {
  const repository = getBookRepository();
  const book = await repository.findOne(id);

  return book;
};

export const BookService = { create, findAll, findById };
