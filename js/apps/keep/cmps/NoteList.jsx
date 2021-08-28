import { NotePreview } from './NotePreview.jsx';
export function NoteList({ notes, onLoadNotes }) {
    return (
        <div className="list-container">

            <section className="note-list">
                {!notes.length && <div>No Notes yet</div>}
                {notes && (notes.map((note) => {
                    if (!note.isDeleted && !note.isPined) return <NotePreview key={note.id} note={note} onLoadNotes={onLoadNotes} />
                }


                ))}
            </section>
        </div>
    )
}
