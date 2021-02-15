import { IdParam } from '../../base';
import { BookService } from './service';
import { BookCreateDTO } from './dto';

const books = async () => {
  const response = await BookService.findAll();
  return response;
};

const book = async (params: IdParam) => {
  const response = await BookService.findById(params.id);
  return response;
};

const createBook = async (params: BookCreateDTO) => {
  const bookCreateDTO = BookCreateDTO.of(params);
  const response = await BookService.create(bookCreateDTO);

  return response;
};

export const BookResolvers = { books, book, createBook };
