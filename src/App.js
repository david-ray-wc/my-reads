import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import myBooks from './temp-books'
import SearchPage from './components/SearchPage';
import ListBook from './components/ListBook';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    myBooks: myBooks,
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBook 
            myBooks={this.state.myBooks}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchPage />
        )} />
      </div>
    )
  }
}

export default BooksApp
