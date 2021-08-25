import { EmailDetails } from "./EmailDetails.jsx";

export default class EmailPreview extends React.Component {
  state = {
    isDetailsShown: false,
  };

  toggleEmailDetails = () => {
    this.setState({ isDetailsShown: !this.state.isDetailsShown });
  };

  render() {
    const { email } = this.props;
    const { isDetailsShown } = this.state;
    return (
      <div className="email-container" onClick={this.toggleEmailDetails}>
        <div className="email-Preview">
          <div className="star-icon">&#9733;</div>
          <div className="sentFrom">{email.userName.split(" ")[0]}</div>
          <div className="email-body">
            <span className="subject">{email.subject} </span>
            <span className="message">{email.body.substring(0, 200)}</span>
          </div>
          <div className="time">
            {new Date(email.sentAt).toLocaleTimeString("en-US")}
          </div>
        </div>
        {isDetailsShown && <EmailDetails email={email} />}
      </div>
    );
  }
}
