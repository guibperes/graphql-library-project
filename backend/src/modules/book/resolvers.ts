import { IdParam } from '../../base';
import { BookService } from './service';
import { BookDTO } from './dto';

const books = async () => {
  const response = await BookService.findAll();
  return response;
};

const book = async (params: IdParam) => {
  const response = await BookService.findById(params.id);
  return response;
};

const createBook = async (params: BookDTO) => {
  const bookDTO = BookDTO.of(params);
  const response = await BookService.create(bookDTO);

  return response;
};

export const BookResolvers = { books, book, createBook };
