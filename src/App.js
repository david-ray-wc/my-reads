import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import myBooks from './temp-books';
import SearchPage from './components/SearchPage';
import ListBook from './components/ListBook';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    myBooks: myBooks
  };

  bookStatusChange = (selectedBook, newStatus) => {
    const myBooks = this.state.myBooks;
    const bookIndex = myBooks.findIndex(
      book => book.title === selectedBook.title
    );

    myBooks[bookIndex].status = newStatus;
    this.setState(prevState => ({
      myBooks
    }));
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBook
              myBooks={this.state.myBooks}
              onBookStatusChange={this.bookStatusChange}
            />
          )}
        />
        <Route path="/search" render={() => <SearchPage />} />
      </div>
    );
  }
}

export default BooksApp;
