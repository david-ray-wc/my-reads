import React from 'react';

const Book = props => {
  const book = props.book;
  const { imageLinks, shelf, authors, title } = book;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              imageLinks ? imageLinks.smallThumbnail : ''
              })`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={!shelf ? 'none' : shelf}
            onChange={event => props.onStatusChange(book, event.target.value)}
          >
            <option value="disabled" disabled>
              Move to...
            </option>
            <option value="currentlyReading"> Currently Reading </option>
            <option value="wantToRead"> Want to Read </option>
            <option value="read"> Read </option>
            <option value="none"> None </option>
          </select>
        </div>
      </div>
      <div className="book-title"> {title} </div>
      {typeof authors === 'string' && (
        <div className="book-authors"> {authors} </div>
      )}
      {typeof authors === 'object' &&
        authors.map(author => (
          <div className="book-authors" key={author}> {author} </div>
        ))}
      {!authors && <div className="book-authors"></div>}
    </div>
  );
};

export default Book;
