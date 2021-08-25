import {NotePreview} from './NotePreview.jsx';
export function NoteList({notes }) {

    return (
        <section className="reviews-list">
                    {!notes.length && <div>No Notes yet</div>}
                    {notes && (notes.map((note) => 
        
                        <NotePreview key={note.id} note={note} />
        
                    ))}
                </section>
        )
}
{/* <div>hello keep</div> */}