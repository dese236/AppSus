const min = 0;
const max = 300;
export class BookFilter extends React.Component {
  state = {
    filterBy: {
      name: "",
      minPrice:"",
      maxPrice:""
    },
    currVal: Math.floor((max + min) / 2),
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value =
      ev.target.type === "number" ? +ev.target.value : ev.target.value.toUpperCase();
    this.setState(
      { filterBy: { ...this.state.filterBy, [field]: value } },
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy);
  };

  updateTextInput = (val) => {
    this.setState({ currVal: val });
  };

  render() {
    const { name, minPrice, maxPrice } = this.state.filterBy;
    return (
      <form className="book-filter" onSubmit={this.onFilter}>
        <label htmlFor="by-name"></label>
        <input
          name="name"
          type="text"
          id="by-name"
          value={name}
          onChange={this.handleChange}
          placeholder="Enter Name"
        ></input>
        <label htmlFor="min-price">Min price</label>
        <input
          name="minPrice"
          id="min-price"
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={this.handleChange}
        />
        <label htmlFor="max-price">Max speed</label>
        <input
          name="maxPrice"
          id="max-price"
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
