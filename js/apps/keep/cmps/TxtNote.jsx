import { NoteOpt } from "./NoteOpt.jsx"

export class TxtNote extends React.Component {
    state ={
        color : ''
    }

    onSetColor = (color)=>{
        this.setState({color})
    }

    render(){
        const { note , onLoadNotes } = this.props
        const {color} = this.state
            return (
                <div className="txt-note-card note-card" style={{backgroundColor:color}}>
                    <small>{note.noteDate}</small>
                    <h2>{note.title}</h2>
                    <h4>{note.txt}</h4>
                    <NoteOpt note={note} onLoadNotes={onLoadNotes} />
                </div>
            )
    }

}