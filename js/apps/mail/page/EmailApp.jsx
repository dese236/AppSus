import { EmailList } from "../cmps/EmailList.jsx";
import { EmailService } from "../service/Email.service.js";
import { EmailFilter } from "../cmps/EmailFilter.jsx";
import { EmailFolderList } from "../cmps/EmailFolderList.jsx";

export class MailApp extends React.Component {
  state = {
    emails: [],
    filterBy: "inbox",
    userFullName: EmailService.getLoggedUser().fullname,
  };

  componentDidMount() {
    this.loadEmails();
  }

  loadEmails = () => {
    debugger
    EmailService.query(this.state.filterBy).then((emails) => {
      this.setState({ emails });
    });
  };
  onSetFilter = (filterBy) => {
    debugger
    this.setState({ filterBy }, this.loadEmails);
  };
  
  render() {
    const { emails, userFullName } = this.state;
    if (!emails) return <div>loading</div>;

    return (
      <section>
        {/*{JSON.stringify(this.state.emails, null, 2)}*/}
        <EmailFilter onSetFilter={this.onSetFilter} />
        <div className="main-container">
          <EmailFolderList  onSetFilter={this.onSetFilter} />
          <EmailList  emails={emails} userFullName={userFullName} />
        </div>
      </section>
    );
  }
}
