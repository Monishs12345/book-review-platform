import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(res => res.json())
      .then(setBooks);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📚 Featured Books</h2>
      {books.map(book => (
        <div key={book.id}>
          <Link to={`/book/${book.id}`}>{book.title}</Link>
        </div>
      ))}
    </div>
  );
}
