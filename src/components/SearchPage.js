import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchPage extends Component {
  state = {
    searchTerm: '',
    searchResults: []
  };

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
    this.searchForBook(term);
  }

  searchForBook(input) {
    BooksAPI.search(input).then(books => {
      this.setState({
        searchResults: books
      });
    });
  }

  render() {
    const searchResults = this.state.searchResults;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={term => this.updateSearchTerm(term.target.value)}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {!searchResults || searchResults.error ? (
              <h2> No Search Results Found </h2>
            ) : (
                this.state.searchResults.map(book => (
                  <li key={book.id}>
                    <Book
                      onStatusChange={this.props.onAddBook}
                      book={book}
                    />
                  </li>
                ))
              )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
