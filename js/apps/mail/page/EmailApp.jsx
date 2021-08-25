import { EmailList } from "../cmps/EmailList.jsx";
import { EmailService } from "../service/Email.service.js";
import { EmailFilter } from "../cmps/EmailFilter.jsx";
import { EmailFolderList } from "../cmps/EmailFolderList.jsx";

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

  render() {
    const { emails, userFullName } = this.state;
    if (!emails) return <div>loading</div>;

    return (
      <section>
        {/*{JSON.stringify(this.state.emails, null, 2)}*/}
        <EmailFilter />
        <div className="main-container">
          <EmailFolderList />
          <EmailList emails={emails} userFullName={userFullName} />
        </div>
      </section>
    );
  }
}
