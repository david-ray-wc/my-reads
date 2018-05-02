import React from 'react';
import Book from './Book';

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/* Map out all of the books */}
          {props.bookList.map(book => {
            return (
              <li key={book.title}>
                <Book
                  book={book}
                  shelfStatus={props.shelfStatus}
                  onStatusChange={props.onStatusChange}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
