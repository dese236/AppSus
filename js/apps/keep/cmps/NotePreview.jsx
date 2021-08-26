import {TxtNote} from './TxtNote.jsx'
import {ImgNote} from './ImgNote.jsx'
import {VideoNote} from './VideoNote.jsx'
export function NotePreview({note , onLoadNotes}) {
    return(
        // <div className="note-preview">
        <React.Fragment>

            {note.noteType === 'txt' && <TxtNote note={note} onLoadNotes={onLoadNotes} />}
            {note.noteType === 'img' && <ImgNote note={note} onLoadNotes={onLoadNotes}/>}
            {note.noteType === 'video' && <VideoNote note={note} onLoadNotes={onLoadNotes}/>}  
         {/* </div> */}
         </React.Fragment>



    )
}

// {/*  */}