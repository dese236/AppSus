import { EmailService } from "../service/Email.service.js";

export class NewMail extends React.Component {
  state = {
    email: {
      subject: "",
      message: "",
    },
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      email: { ...prevState.email, [field]: value },
    }));
  };


  onSendNewEmail = () => {
    let newMail = {
      subject: this.state.email.subject,
      body: this.state.email.message,
    };
    this.props.SendNewEmail(newMail)
  };


  render() {
    const { SendNewEmail } = this.props.SendNewEmail;
    const { subject, message } = this.state.email;
    return (
      <form className="newEmail" onSubmit={this.onSendNewEmail}>
        <div className="new-email-header">NEW email</div>
        <input
          type="text"
          placeholder="TO"
          id="subject"
          onChange={this.handleChange}
        />
        <input
          name="subject"
          type="text"
          placeholder="SUBJECT"
          onChange={this.handleChange}
        />
        <textarea
          value={message}
          onChange={this.handleChange}
          name="message"
          className="textarea"
          id="review_content"
          required="required"
          rows="15"
        ></textarea>
        <button>Send</button>
      </form>
    );
  }
}
