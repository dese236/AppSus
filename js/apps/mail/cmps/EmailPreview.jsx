import { EmailDetails } from "./EmailDetails.jsx";

export default class EmailPreview extends React.Component {
  state = {
    isDetailsShown: false,
    isRead: this.props.email.isRead,
  };

  toggleEmailDetails = (emailId) => {
    this.setState({ isRead: true });
    this.props.onReadEmail(emailId);
    this.setState({ isDetailsShown: !this.state.isDetailsShown });
  };

  onChangeToUnread = (ev, emailId) => {
    this.props.onToggleIsRead(ev, emailId);
    this.setState({ isRead: false });
    this.setState({ isDetailsShown: false });
  };

  getEmailDate(emailTime) {

    var OneDay = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;

    if (OneDay > emailTime) {
      return new Date(emailTime).toLocaleString().substring(0, 15);
    } else {
      return new Date(emailTime).toLocaleTimeString("en-US");
    }
  }

  render() {
    const { email, onRemoveEmail, ontoggleStar } = this.props;
    const { isDetailsShown, isRead } = this.state;
    return (
      <div
        className="email-container"
        onClick={() => {
          this.toggleEmailDetails(email.id);
        }}
      >
        <div className={isRead ? "email-Preview read" : "email-Preview"}>
          <div
            onClick={(ev) => {
              ontoggleStar(ev, email.id);
            }}
            className={`fas fa-star ${email.isStared ? "yellow" : "grey"}`}
          ></div>
          <div className="sentFrom">{email.userName}</div>
          <div className="email-body">
            <span className="subject">{email.subject} </span>
            <span className="message">{email.body.substring(0, 100)}</span>
          </div>
          <div className="time">
            {this.getEmailDate(email.sentAt)}{" "}

          </div>
        </div>
        {isDetailsShown && (
          <EmailDetails
            toggleEmailDetails={this.toggleEmailDetails}
            onChangeToUnread={this.onChangeToUnread}
            email={email}
            onRemoveEmail={onRemoveEmail}
          />
        )}
      </div>
    );
  }
}
