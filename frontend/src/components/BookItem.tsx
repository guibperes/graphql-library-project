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
  return <div
    style={{
      marginBottom: '5px',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%',
    }}
  >
    <div>{data.title} - {data.pages} páginas</div>
    <p>{data.description}</p>
  </div>;
};
