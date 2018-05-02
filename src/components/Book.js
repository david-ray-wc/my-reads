import React from 'react';

const Book = props => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={props.shelfStatus}
            onChange={event =>
              props.onStatusChange(props.book, event.target.value)
            }
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      {typeof props.book.authors === 'string' && (
        <div className="book-authors">{props.book.authors}</div>
      )}
      {typeof props.book.authors === 'object' &&
        props.book.authors.map(author => (
          <div className="book-authors">{author}</div>
        ))}
    </div>
  );
};

export default Book;
