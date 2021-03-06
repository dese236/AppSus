import EmailPreview from "./EmailPreview.jsx";

export function EmailList({
  emails,
  ontoggleStar,
  onRemoveEmail,
  onToggleIsRead,
  onReadEmail,
  onSortEmails,
 
}) {
  return (
    <section className="emails-list">
      <div className="emails-list-heder">
        <span className="favorite">favorite</span>
        <span  className="name">name <i  onClick={()=>{onSortEmails('name')}} className="fas fa-sort"></i></span>
        <span className="message">message</span>
        <span onClick={()=>{onSortEmails('date')}} className="date">date</span>
      </div>
      {emails.map((email) => {
        return (
          <EmailPreview
            onToggleIsRead={onToggleIsRead}
            onReadEmail={onReadEmail}
            key={email.id}
            ontoggleStar={ontoggleStar}
            onRemoveEmail={onRemoveEmail}
            email={email}
          />
        );
      })}
    </section>
  );
}
