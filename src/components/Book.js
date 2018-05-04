import React from 'react';

const Book = props => {
  const book = props.book;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.smallThumbnail : ''
              })`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={!book.shelf ? 'none' : book.shelf}
            onChange={event => props.onStatusChange(book, event.target.value)}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading"> Currently Reading </option>
            <option value="wantToRead"> Want to Read </option>
            <option value="read"> Read </option>
            <option value="none"> None </option>
          </select>
        </div>
      </div>
      <div className="book-title"> {book.title} </div>
      {typeof book.authors === 'string' && (
        <div className="book-authors"> {book.authors} </div>
      )}
      {typeof book.authors === 'object' &&
        book.authors.map(author => (
          <div className="book-authors" key={author}> {author} </div>
        ))}
      {!book.authors && <div className="book-authors"> no author </div>}
    </div>
  );
};

export default Book;
