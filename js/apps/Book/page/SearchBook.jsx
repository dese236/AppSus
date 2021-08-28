import { SearchResult } from "../cmps/SearchResult.jsx";
import { bookService } from "../services/book.service.js";

export class SearchBook extends React.Component {
  state = {
    keySearch: " ",
    result: [],
  };

  handleChange = ({ target }) => {
    this.setState({ keySearch: target.value });
    console.log(target.value);
  };

  onSearchBook = (ev) => {
    ev.preventDefault();
    bookService.searchBook(this.state.keySearch).then(this.setBookResult);
  };

  setBookResult = (res) => {
    let searchResult = [];
    searchResult = res.items.map((book) => {
      return { 
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        publishedDate: book.volumeInfo.publishedDate,
        pageCount: book.volumeInfo.pageCount || '',
        categories: book.volumeInfo.categories || '',
        thumbnail: book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : "http://coding-academy.org/books-photos/2.jpg",
        description: book.volumeInfo.description
          ? book.volumeInfo.description
          : "This book has no description",
        listPrice: {
          amount: '',
          currencyCode: "ILS",
        },
      };
    });
    this.setState({ result: searchResult });
    console.log(this.state.result);
  };



  onAddBook = (book) => {
    bookService.createBook(book).then(() => this.props.history.push(`/book`));
  };

  render() {
    const { keySearch, result } = this.state;
    return (
      <section>
        <form className="search-book-input" onSubmit={this.onSearchBook}>
          <div>search your book</div>
          <input value={keySearch} onChange={this.handleChange} type="text" />
          <button>Search</button>
        </form>
        {result.length &&
          result.map((book) => {
            return (
              <SearchResult
                onAddBook={this.onAddBook}
                key={book.id}
                book={book}
              />
            );
          })}
      </section>
    );
  }
}
