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
    return (
      <div
        className={this.props.isMenuOpen ? "aside-nav menu-open" : "aside-nav"}
      >
        <li>
          <Link to="/mail/new">
            <img src="../../../../css/img/plus-btn.png" />
          </Link>
        </li>
        <ul>
          <li>
            <img src="../../../../css/img/inbox.png" />

            <input
              name="status"
              type="button"
              value="inbox"
              onClick={this.handleChange}
            />
          </li>
          <li>
            <img src="../../../../css/img/star.png" />

            <input
              name="isStared"
              type="button"
              value="Stared"
              onClick={this.handleChange}
            />
          </li>
          <li>
            <img src="../../../../css/img/share.png" />

            <input
              name="status"
              type="button"
              value="sent"
              onClick={this.handleChange}
            />
          </li>
          <li>
            <img src="../../../../css/img/trash-can.png" />
            <input
              name="status"
              type="button"
              value="trash"
              onClick={this.handleChange}
            />
          </li>
        </ul>
      </div>
    );
  }
}
