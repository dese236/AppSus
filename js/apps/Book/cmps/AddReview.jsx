import { bookService } from "../services/book.service.js";
import { StarRating } from "./StarsReview.jsx";
import { eventBusService } from "../services/event-bus-service.js";
import { utilService } from "../services/util.service.js";

export class AddReview extends React.Component {
  state = {
    book: "",
    review: {
      txt: null,
      rate: null,
      name: "Books Reader",
      date: new Date().toDateString(),
      id: utilService.makeId(),
    },
  };

  componentDidMount() {
    this.loadBook();
    this.removeEventBus = eventBusService.on("rating", (starsCount) => {
      this.setState((prevState) => ({
        review: { ...prevState.review, rate: starsCount },
      }));
    });
  }

  componentWillUnmount() {
    this.removeEventBus();
  }

  loadBook = () => {
    const id = this.props.match.params.bookId;
    bookService.getBookById(id).then((book) => {
      if (!book) this.props.history.push("/");
      this.setState({ book });
    });
  };

  onSaveReview = (ev) => {
    ev.preventDefault();
    bookService
      .addReview(this.state.book, this.state.review)
      .then(() => {
        eventBusService.emit("user-msg", {
          txt: "review addes!",
          type: "done",
        });
      })
      .then(() => this.props.history.push(`/book/${this.state.book.id}`));
  };

  handleChange = ({ target }) => {
    let txt = target.value;
    this.setState((prevState) => ({
      review: { ...prevState.review, txt: txt },
    }));
  };

  render() {
    const { book } = this.state;
    if (!book) return <div>loading</div>;
    return (
      <form className="add-review-container" onSubmit={this.onSaveReview}>
        <div className="reviews-add_title">
          Write a Review for:
          <span>{book.title}</span>
        </div>
        <StarRating />
        <div>
          Your review will help millions of consumers find trustworthy online
          businesses and avoid scams.
        </div>
        <textarea
          onChange={this.handleChange}
          name="content"
          className="textarea"
          id="review_content"
          placeholder="Write your review to help others learn about this business"
          required="required"
          rows="5"
        ></textarea>
        <button className="add-review-btn">Submit your review</button>
      </form>
    );
  }
}
