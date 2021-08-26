import { EmailList } from "../cmps/EmailList.jsx";
import { EmailService } from "../service/Email.service.js";
import { EmailFilter } from "../cmps/EmailFilter.jsx";
import { EmailFolderList } from "../cmps/EmailFolderList.jsx";
import { NewMail } from "../cmps/NewMail.jsx";
const { Link, Route } = ReactRouterDOM;

export class MailApp extends React.Component {
  state = {
    emails: [],
    filterBy: null,
    userFullName: EmailService.getLoggedUser().fullname,
  };

  componentDidMount() {
    this.loadEmails();
  }

  loadEmails = () => {
    EmailService.query(this.state.filterBy).then((emails) => {
      this.setState({ emails });
    });
  };
  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadEmails);
  };


  SendNewEmail = (email) => {
    EmailService.createEmail(email)
      .then(this.loadEmails)
      .then(() => this.props.history.push(`/mail`));
  };

  onRemoveEmail = (emailId) => {
    EmailService.removeEmail(emailId)
      .then(this.loadEmails)
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
  render() {
    console.log("render");
    const { emails, userFullName } = this.state;
    if (!emails) return <div>loading</div>;

    return (
      <section>
        <Route
          exact
          path="/mail/mail/new"
          render={(props) => (
            <NewMail {...props} loadEmails={this.loadEmails} />
          )}
        />
        {/*<Route path="/mail/mail/new"
         component={NewMail} />*/}
        <EmailFilter onSetFilter={this.onSetFilter} />
        <div className="main-container">
          <EmailFolderList
            SendNewEmail={this.SendNewEmail}
            onSetFilter={this.onSetFilter}
          />
          <EmailList
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
