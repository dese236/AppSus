import { eventBusService } from "../../../services/event-bus-service.js";
//import { NewMail } from "./NewMail.jsx";
const { Link, Route } = ReactRouterDOM;

export class EmailFolderList extends React.Component {
  state = {
    filterBy: {
      status: "inbox",
      isRead: "",
      isStared: false,
      lables: "",
      txt: "",
    },
    newMail: false,
  };
  componentDidMount() {
    this.removeEventBus = eventBusService.on("input-txt", this.handleChange);
  }

  handleChange = (ev) => {
    debugger;
    const field = ev.target.name;
    const value =
      ev.target.type === "button"
        ? ev.target.defaultValue
        : ev.target.value.toUpperCase();

    if (field === "txt" || field === "isRead") {
      this.setState(
        { filterBy: { ...this.state.filterBy, [field]: value } },
        () => {
          this.props.onSetFilter(this.state.filterBy);
        }
      );
    } else {
      this.setState(
        {
          filterBy: {
            status: "",
            isRead: "",
            isStared: false,
            lables: "",
            txt: "",
            [field]: value,
          },
        },
        () => {
          this.props.onSetFilter(this.state.filterBy);
        }
      );
    }
  };

  onNewEmail = () => {
    this.setState({ newMail: !this.state.newMail });
  };

  render() {
    const { status, isRead, isStared, lables } = this.state.filterBy;

    return (
      <div className="aside-nav">
        <ul className="aside-nav-list-filter">
          {/*<button onClick={this.onNewEmail}>+</button>*/}
          <li>
            <Link exact to="/mail/mail/new">
              <img src="../../../../css/img/plus-btn.png" />
            </Link>
          </li>
          <li>
            <input
              name="status"
              type="button"
              value="inbox"
              onClick={this.handleChange}
            />
           <img src="../../../../css/img/inbox.png" />
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
    );
  }
}
