import React from 'react';

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/* Map out all of the books */}
          {props.bookList.map(book => {
            return (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.cover})` }}></div>
                    <div className="book-shelf-changer">
                      <select value={props.shelfStatus} onChange={() => {}}> 
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
};

export default BookShelf;
