import {NotePreview} from './NotePreview.jsx';
export function PinedList({notes , onLoadNotes }) {
    return (
        <section className="note-list">
                    {!notes.length && <div>No Notes in trash yet</div>}
                    {notes && (notes.map((note) => {

                        if(note.isPined){
                            return  <NotePreview key={note.id} note={note} onLoadNotes={onLoadNotes} />
                        }
                    }
        
                    ))}
                </section>
        )
}
