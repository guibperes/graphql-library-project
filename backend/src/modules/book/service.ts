import { Database } from '../../database';

import { BookRepository } from './repository';
import { Book } from './entity';
import { BookDTO } from './dto';

const getBookRepository = () => Database.getRepository(BookRepository);

const create = async (bookDTO: BookDTO): Promise<Book> => {
  const repository = getBookRepository();

  const book = Book.of(bookDTO);
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

const updateById = async (id: string, bookDTO: BookDTO): Promise<Book> => {};

const deleteById = async (id: string): Promise<boolean> => {};

export const BookService = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};
