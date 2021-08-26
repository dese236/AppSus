import { NoteOpt } from "./NoteOpt.jsx"
export class VideoNote extends React.Component {
    state ={
        color : ''
    }

    onSetColor = (color)=>{
        this.setState({color})
    }
render(){
    const { note , onLoadNotes } = this.props
        const {color} = this.state
    return(
        <div className="video-note-card card" style={{backgroundColor:color}}>
            <NoteOpt note={note} onLoadNotes={onLoadNotes}/>
            <iframe className="my-video"src={note.src} frameBorder="0" type="html" width="100%" height="100%"></iframe>
        </div>
    )

}

}

//<iframe className="my-video"src={note.src} frameBorder="0" type="html" width="100%" height="100%"></iframe>