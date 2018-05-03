import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchPage from './components/SearchPage';
import ListBook from './components/ListBook';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    myBooks: []
  };

  bookStatusChange = (selectedBook, newStatus) => {
    const myBooks = this.state.myBooks;
    const bookIndex = myBooks.findIndex(
      book => book.title === selectedBook.title
    );

    myBooks[bookIndex].shelf = newStatus;
    this.setState(prevState => ({
      myBooks
    }));
    BooksAPI.update(selectedBook, newStatus);
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ myBooks: books });
    });
  }

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
        <Route
          path="/search"
          render={() => (
            <SearchPage
              myBooks={this.state.myBooks}
              onBookStatusChange={this.bookStatusChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
