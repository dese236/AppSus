export class EmailFilter extends React.Component {
  //handleChange = (ev) => {
  //  const field = ev.target.name;
  //  const value =
  //    ev.target.type === "number" ? +ev.target.value : ev.target.value;
  //  this.setState(
  //    { filterBy: { ...this.state.filterBy, [field]: value } },
  //    () => {
  //      this.props.onSetFilter(this.state.filterBy);
  //    }
  //  );
  //};

  render() {
    return (
      <form className="search-mail-input">
        <input type="text" />
      </form>
    );
  }
}
