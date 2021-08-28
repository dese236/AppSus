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
        <div className="video-note-card note-card" style={{backgroundColor:color}}>
            <iframe className="my-video"src={note.src} frameBorder="0" type="html" width="100%" height="100%"></iframe>
            <NoteOpt note={note} onLoadNotes={onLoadNotes}/>
        </div>
    )

}

}

