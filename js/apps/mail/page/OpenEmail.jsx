import { EmailService } from "../service/Email.service.js";

export class OpenEmail extends React.Component {
  state = {
    email: null,
  };

  componentDidMount() {
    const emailId = this.props.match.params.emailId;
    if (!emailId) return;
    EmailService.getEmailById(emailId).then((email) => {
      this.setState({ email });
    });
  }

  render() {
    const { email } = this.state;
    if (!email) return <div>loading</div>;
    return (
      <section className="EmailFullDetails">
        <div>{email.subject}</div>
        <div>from: <span>{email.userName}</span> </div>
        <div>to:<span>{email.to}</span></div>
        ..........................
        <div>{email.body}</div>
        <div className="date">date:{email.sentAt}</div>
      </section>
    );
  }
}

//userName: 'inbox2',
//id: utilService.makeId(),
//subject: 'Miss you',
//body: 'Would love to catch up sometimes',
//isRead: true,
//sentAt: 1551133930594,
//to: 'momo@momo.com',
//status: 'inbox',
//isStared: true,
//lables: ['important', 'romantic']
//}
