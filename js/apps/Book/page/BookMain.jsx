import { bookService } from "../services/book.service.js";
import { BookList } from "../cmps/BookList.jsx";
import { BookFilter } from "../cmps/BookFilter.jsx";

export class BookMain extends React.Component {
  state = {
    books: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    bookService.query(this.state.filterBy).then((books) => {
      this.setState({ books });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks);
  };
  render() {
    const { books } = this.state;
    return (
      <section>
        <div className="header">Miss Book</div>

        <BookFilter
          filterBy={this.state.filterBy}
          onSetFilter={this.onSetFilter}
        />
        <BookList books={books} />
      </section>
    );
  }
}
