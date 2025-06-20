import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then(res => res.json())
      .then(setBook);
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
    </div>
  );
}
