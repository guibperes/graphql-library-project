import React from 'react';

interface Book {
  id: string;
  title: string;
  description: string;
  pages: number;
}

interface Props {
  data: Book;
}

export const BookItem: React.FC<Props> = ({ data }) => {
  return <div>
    {data.title}
  </div>;
};
