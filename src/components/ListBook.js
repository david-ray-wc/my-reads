import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class ListBook extends Component {
  state = {
    myBooks: this.props.myBooks
  }

  filteredBooks = (status) => this.state.myBooks.filter(book => book.status === status);

  bookStatusChange = (selectedBook, newStatus) => {
    const myBooks = this.state.myBooks;
    const bookIndex = myBooks.findIndex(book => book.title === selectedBook.title);

    myBooks[bookIndex].status = newStatus;
    this.setState(prevState => ({
      myBooks
    }))
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              bookshelfTitle='Currently Reading'
              shelfStatus='currentlyReading'  
              bookList={this.filteredBooks('currentlyReading')}
              onStatusChange={this.bookStatusChange}
            />
            <BookShelf 
              bookshelfTitle='Want to Read'
              shelfStatus='wantToRead'
              bookList={this.filteredBooks('wantToRead')}
              onStatusChange={this.bookStatusChange}
            />
            <BookShelf 
              bookshelfTitle='Read'
              shelfStatus='read'
              bookList={this.filteredBooks('read')}
              onStatusChange={this.bookStatusChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a Book</Link>
        </div>
      </div>
    )
  }
}

export default ListBook;
