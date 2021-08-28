import { bookService } from "../services/book.service.js";

const {Link} = ReactRouterDOM
export class BookPreview extends React.Component {
  state = {
    currencyIcon: "",
  };
  componentDidMount() {
    this.getCurrencyIcon();
  }

  getCurrencyIcon = () => {
    let currencyIcon = "";
    const { listPrice } = this.props.book;
    if (typeof(listPrice)==='number') {
      switch (listPrice.currencyCode) {
        case "EUR":
          currencyIcon = "€";
          break;
        case "USD":
          currencyIcon = "$";
          break;
  
        case "ILS":
          currencyIcon = "₪";
          break;
      }
    }
    else currencyIcon = 'NOT_FOR_SALE'
    this.setState({ currencyIcon });
  };
  
  render() {
    const { currencyIcon } = this.state;
    const { book } = this.props;
    return (
      <article className="book-card">
        <div className="titel">{book.title}</div>
        <h3>
          price: {book.listPrice.amount} {currencyIcon}
        </h3>
        <img src={book.thumbnail} />
        <Link to={`/book/${book.id}`}><button className="more-details">more details</button></Link>
      </article>
    );
  }
}
