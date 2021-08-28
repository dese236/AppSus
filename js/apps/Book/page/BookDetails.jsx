const { Link } = ReactRouterDOM;
import { LongTxt } from "../cmps/LongTxt.jsx";
import { ReviewList } from "../cmps/ReviewList.jsx";
import { bookService } from "../services/book.service.js";
import { eventBusService } from "../services/event-bus-service.js";

export class BookDetails extends React.Component {
  state = {
    book: null,
  };

  componentDidMount() {
    this.loadBook();
  }

  loadBook = () => {
    const id = this.props.match.params.bookId;
    bookService.getBookById(id).then((book) => {
      if (!book) this.props.history.push("/");
      this.setState({ book });
    });
  };

  getpublishedDateTxt = () => {
    let publishedDateTxt = "";
    let diffYears = new Date().getFullYear() - this.state.book.publishedDate;
    if (diffYears > 10) {
      publishedDateTxt = "Veteran Book";
    } else {
      publishedDateTxt = "New";
    }
    return publishedDateTxt;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
      this.loadBook();
    }
  }



  getPageCountTxt = () => {
    const { pageCount } = this.state.book;
    if (pageCount > 500) {
      return "Long reading";
    } else if (pageCount > 100) {
      return "Decent Reading";
    } else {
      return "Light Reading";
    }
  };

  onBack = () => {
    this.props.history.push("/book");
  };

  onRemoveReview = (reviewId) => {
    bookService
      .deleteReview(this.state.book.id, reviewId)
      .then(this.loadBook)
      .then(() => {
        eventBusService.emit("user-msg", {
          txt: "review removed",
          type: "remove",
        });
      });
  };

  render() {

    const { book } = this.state;
    if (!book) return <div>loading....</div>;
    return (
      <div className="book-details">
        <div
          className={`titel-currBook ${
            book.listPrice.amount > 150 ? "red" : "green"
          }`}
        >
          {book.title}
        </div>
        <div className="details">
          <span>{this.getPageCountTxt()}</span>
          <span>{this.getpublishedDateTxt()}</span>
          <span className={book.listPrice.amount > 150 ? "red" : "green"}>
            {book.listPrice.amount}
          </span>
        </div>
        <div>
          <LongTxt text={book.description} />
        </div>{" "}
        <img src={book.thumbnail} />
        <Link to={`/book/add/${book.id}`}>
          <button className="write-review-btn">Write a Review</button>
        </Link>
        <ReviewList book={book} onRemoveReview={this.onRemoveReview} />
        <div className="btn-container">
          <button className="back" onClick={this.onBack}>
            Go Back
          </button>
          <Link to={`/book/details/${bookService.getNextBookId(book.id)}`}>
            <button className="next-book-btn">Next book</button>
          </Link>
        </div>
      </div>
    );
  }
}
