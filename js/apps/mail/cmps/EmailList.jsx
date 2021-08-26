import EmailPreview from "./EmailPreview.jsx";

export function EmailList({ emails, ontoggleStar, onRemoveEmail ,onToggleIsRead, onReadEmail}) {
  return (
    <section className="emails-list">
      <div className='emails-list-heder'>
        <span>favorite</span>
        <span>name</span>
        <span>message</span>
        <span>date</span>
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
