export function EmailDetails({ email }) {
  return (
    <div className="email-details">
      <div className="sentFronName">From:{email.userName}</div>
      <div className="email-body">
        <span className="subject">{email.subject} </span>
        <span className="message">{email.body}</span>
      </div>
    </div>
  );
}

//  userName: loggedinUser.fullname,
//  id: utilService.makeId(),
//  subject: 'SENT BY YOU!',
//  body: 'Would love to catch up sometimes',
//  isRead: false,
//  sentAt: 1551133930594,
//  to: 'user@appsus.com'
//},
