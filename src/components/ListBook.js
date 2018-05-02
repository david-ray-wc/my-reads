import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

const ListBook = props => {
  const filteredBooks = status =>
    props.myBooks.filter(book => book.shelf === status);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            bookshelfTitle="Currently Reading"
            shelfStatus="currentlyReading"
            bookList={filteredBooks('currentlyReading')}
            onStatusChange={props.onBookStatusChange}
          />
          <BookShelf
            bookshelfTitle="Want to Read"
            shelfStatus="wantToRead"
            bookList={filteredBooks('wantToRead')}
            onStatusChange={props.onBookStatusChange}
          />
          <BookShelf
            bookshelfTitle="Read"
            shelfStatus="read"
            bookList={filteredBooks('read')}
            onStatusChange={props.onBookStatusChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a Book</Link>
      </div>
    </div>
  );
};

export default ListBook;
