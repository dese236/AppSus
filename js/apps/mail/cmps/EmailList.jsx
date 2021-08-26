import  EmailPreview from "./EmailPreview.jsx";

export function EmailList({ emails , onRemoveEmail}) {
  return (
    <section className="emails-list">
      {emails.map((email) => {
        return <EmailPreview  key={email.id}  onRemoveEmail={onRemoveEmail} email={email}/>;
      })}
    </section>
  );
}
