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
  onBack = () => {
    this.props.history.push("/mail");
  };

  render() {
    const { email } = this.state;
    if (!email) return <div>loading</div>;
    return (
      <section className="EmailFullDetails">
        <div className="subject">{email.subject}</div>
        <div className="from">
          from: <span>{email.userName}</span>{" "}
        </div>
        <div className="to">
          to:<span>{email.to}</span>
        </div>
        ..........................
        <div>{email.body}</div>
        <div className="date">
          {new Date(email.sentAt).toLocaleString().substring(0, 15)}
        </div>
        <div className="go-back-btn">
          <img src="././././css/img/share.png" onClick={this.onBack} />
        </div>
        {/*<button className="go-back-btn" >mail box</button>*/}
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
