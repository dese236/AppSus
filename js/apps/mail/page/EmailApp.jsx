import { EmailList } from "../cmps/EmailList.jsx";
import { EmailService } from "../service/Email.service.js";
import { EmailFilter } from "../cmps/EmailFilter.jsx";
import { EmailFolderList } from "../cmps/EmailFolderList.jsx";
import { NewMail } from "../cmps/NewMail.jsx";
import { eventBusService } from "../../../services/event-bus-service.js";
const { Link, Route } = ReactRouterDOM;

export class MailApp extends React.Component {
  state = {
    emails: [],
    filterBy: null,
    userFullName: "",
    isMenuOpen: false,
  };

  componentDidMount() {
    this.loadEmails();
    this.setState({ userFullName: EmailService.getLoggedUser().fullname });
  }

  loadEmails = () => {
    EmailService.query(this.state.filterBy)
      .then((emails) => {
        this.setState({ emails });
      })
      .then(() => {
        let result = this.getUnreadCount();
        if (
          this.state.filterBy === null ||
          this.state.filterBy.isStared !== "Stared"
        )
          eventBusService.emit("unread-count", result);
      });
  };
  getUnreadCount = () => {
    let countUnread = this.state.emails.filter((mail) => {
      if (!mail.isRead && mail.status === "inbox") {
        return mail;
      }
    });
    return countUnread;
  };

  onSetFilter = (filterBy) => {
    debugger
    this.setState({ filterBy }, this.loadEmails);
  };

  sendNewEmail = (email) => {
    EmailService.createEmail(email)
      .then(this.loadEmails)
      .then(() => this.props.history.push(`/mail`));
  };

  onRemoveEmail = (emailId) => {
    EmailService.removeEmail(emailId)
      .then(this.loadEmails)
      .then(() => {
        eventBusService.emit("user-msg", {
          txt: "your message moved to trash",
          type: "remove",
        });
      })
      .then(this.props.history.push(`/mail`));
  };

  ontoggleStar = (ev, emailId) => {
    ev.stopPropagation();
    EmailService.toggleStar(emailId)
      .then(this.loadEmails)
      .then(this.props.history.push(`/mail`));
  };
  onReadEmail = (emailId) => {
    EmailService.readEmail(emailId)
      .then(this.loadEmails)
      .then(this.props.history.push(`/mail`));
  };

  onToggleIsRead = (ev, emailId) => {
    ev.stopPropagation();
    EmailService.toggleIsRead(emailId)
      .then(this.loadEmails)
      .then(this.props.history.push(`/mail`));
  };

  onSortEmails = (elSortBy) => {
    EmailService.sortEmails(elSortBy)
      .then(this.loadEmails)
      .then(this.props.history.push(`/mail`));
  };

  onToggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    console.log("render");
    const { emails, userFullName, isMenuOpen } = this.state;
    if (!emails) return <div>loading</div>;

    return (
      <section className={`main-layout ${isMenuOpen ? "menu-open" : ""}`}>
        <Route
          path="/mail/new"
          render={(props) => (
            <NewMail {...props} loadEmails={this.loadEmails} />
          )}
        />
        <div className="email-filter-nav">
          <button
            onClick={this.onToggleMenu}
            className={`fas fa-angle-double-right ${
              this.state.isMenuOpen
                ? "  btn-menu-toggle menu-open"
                : "btn-menu-toggle"
            }`}
          ></button>

          <EmailFilter onSetFilter={this.onSetFilter} />
        </div>
        <div className="main-container">
          <EmailFolderList
            onToggleMenu={this.onToggleMenu}
            isMenuOpen={isMenuOpen}
            sendNewEmail={this.sendNewEmail}
            onSetFilter={this.onSetFilter}
          />
          <EmailList
            onSortEmails={this.onSortEmails}
            onToggleIsRead={this.onToggleIsRead}
            onReadEmail={this.onReadEmail}
            ontoggleStar={this.ontoggleStar}
            onRemoveEmail={this.onRemoveEmail}
            emails={emails}
            userFullName={userFullName}
          />
        </div>
      </section>
    );
  }
}
