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

  onChangeToUnread = (ev,emailId) => {
    this.props.onToggleIsRead(ev,emailId);
    this.setState({ isRead: false });
    this.setState({ isDetailsShown: false });
  };

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
              ontoggleStar(ev,email.id);
            }}
            className={`star-icon ${email.isStared ? "yellow" : "grey"}`}
          >
            &#9733;
          </div>
          <div className="sentFrom">{email.userName}</div>
          <div className="email-body">
            <span className="subject">{email.subject} </span>
            <span className="message">{email.body.substring(0, 200)}</span>
          </div>
          <div className="time">
            {new Date(email.sentAt).toLocaleTimeString("en-US")}
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
