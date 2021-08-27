const { Link, Route } = ReactRouterDOM;

export class EmailDetails extends React.Component {
  noPropagation = (e) => e.stopPropagation();

  render() {
    const { email, onRemoveEmail, onChangeToUnread } = this.props;
    return (
      <div className="email-details">
        <img
          src="/../../../../css/img/open-mail.png"
          onClick={(ev) => {
            onChangeToUnread(ev, email.id);
          }}
        />

        <Link to={`/mail/details/${email.id}`} onClick={this.noPropagation}>
          <img src="/../../../../css/img/maximize.png" />
        </Link>

        {email.status !== "trash" && (
          <img
            src="/../../../../css/img/delete.png"
            onClick={() => {
              onRemoveEmail(email.id);
            }}
          />
        )}
        <span className="subject">{email.subject} </span>
        <div className="sentFronName">
          From:
          <span>{email.userName}</span>
          <small>{email.to}</small>
        </div>
        <span className="message">{email.body}</span>
      </div>
    );
  }
}
