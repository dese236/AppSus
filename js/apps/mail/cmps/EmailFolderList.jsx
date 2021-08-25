import { NewMail } from "./NewMail.jsx";

export class EmailFolderList extends React.Component {
  state = {
    filterBy: {
      status: "inbox",
      isRead: "",
      isStared: false,
      lables: "",
    },
    newMail: false,
  };

handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
    this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
      this.props.onSetFilter(this.state.filterBy)
    });
  };


  handleChange = (ev) => {
    const field = ev.target.name;
    const value =
      ev.target.type === "button"
        ? ev.target.defaultValue
        : ev.target.defaultValue.toUpperCase();

    this.setState(
      {
        filterBy: {
          status: "",
          isRead: "",
          isStared: false,
          lables: "",
          [field]: value,
        },
      },
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  onNewEmail = () => {
    this.setState({ newMail: !this.state.newMail });
  };

  render() {
    const { status, isRead, isStared, lables } = this.state.filterBy;

    return (
      <div className="aside-nav">
        <ul className="aside-nav-list-filter">
          <button onClick={this.onNewEmail}>+</button>
          {this.state.newMail && <NewMail SendNewEmail={this.props.SendNewEmail} />}
          <li>
            <input
              name="status"
              type="button"
              value="inbox"
              onClick={this.handleChange}
            ></input>
          </li>
          <li>
            <input
              name="isStared"
              type="button"
              value="Stared"
              onClick={this.handleChange}
            ></input>
          </li>
          <li>
            <input
              name="status"
              type="button"
              value="sent"
              onClick={this.handleChange}
            ></input>
          </li>
          <li>
            <input
              name="status"
              type="button"
              value="trash"
              onClick={this.handleChange}
            ></input>
          </li>
        </ul>
      </div>
    )
  }
};
