import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_BOOKS } from '../graphql/queries';
import { BookItem } from './BookItem';

interface Book {
  id: string;
  title: string;
  description: string;
  pages: number;
}

export const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { loading, data } = useQuery(GET_ALL_BOOKS);

  useEffect(() => data && setBooks(data.books), [data]);

  return <div>
    {loading
      ? <b>Carregando...</b>
      : books.map(book => <BookItem key={book.id} data={book} />)
    }
  </div>;
}
