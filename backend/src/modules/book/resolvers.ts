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

const updateBook = async (params) => {
  const bookDTO = BookDTO.of(params);
  const response = await BookService.updateById(params.id, bookDTO);

  return response;
};

const deleteBook = async (params: IdParam) => {
  const response = await BookService.deleteById(params.id);
  return response;
};

export const BookResolvers = {
  books,
  book,
  createBook,
  updateBook,
  deleteBook,
};
