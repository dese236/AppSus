export class EmailDetails extends React.Component {
  toggleModal = () => {};

  render() {
    const { email, onRemoveEmail } = this.props;
    return (
      <div className="email-details">
        {/*<img src="../../../../css/img/menu.png" />*/}
        <img src="../../../../css/img/maximize.png" />
        {email.status !== "trash" && (
          <img
            src="../../../../css/img/delete.png"
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
