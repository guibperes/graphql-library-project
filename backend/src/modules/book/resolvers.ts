import { IdParam } from '../../base';
import { BookService } from './service';
import { BookCreateDTO, BookUpdateDTO } from './dto';

const books = async () => {
  const response = await BookService.findAll();
  return response;
};

const book = async (params: IdParam) => {
  const response = await BookService.findById(params.id);
  return response;
};

const createBook = async (params: object) => {
  const bookDTO = BookCreateDTO.of(params);
  const response = await BookService.create(bookDTO);

  return response;
};

const updateBook = async (params: IdParam) => {
  const bookDTO = BookUpdateDTO.of(params);
  const response = await BookService.updateById(bookDTO);

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
