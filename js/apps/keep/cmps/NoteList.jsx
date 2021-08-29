import { NotePreview } from './NotePreview.jsx';
export function NoteList({ notes, onLoadNotes }) {
    return (
            <section className="note-list">
                {notes && (notes.map((note) => {
                    if (!note.isDeleted && !note.isPined) return <NotePreview key={note.id} note={note} onLoadNotes={onLoadNotes} />
                }


                ))}
            </section>
      
    )
}
