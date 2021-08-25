import  EmailPreview from "./EmailPreview.jsx";

export function EmailList({ emails }) {
  return (
    <section className="emails-list">
      {emails.map((email) => {
        return <EmailPreview key={email.id} email={email}/>;
      })}
    </section>
  );
}
