import { NoteOpt } from "./NoteOpt.jsx"

export class ImgNote extends React.Component {
    state = {
        color: ''
    }

    onSetColor = (color) => {
        this.setState({ color })
    }
    render() {
        const { note , onLoadNotes } = this.props
        const {color} = this.state 
        return (
            <div className={`note-card ${!note.title ? 'img-note-card ' : ''} ${note.title ?'txt-img-card' : ''}`} style={{backgroundColor:color}}>
               <small>{note.noteDate}</small>
                <h4>{note.title}</h4>
                <img src={note.img} alt="img" />
                <NoteOpt color={color} note={note} onLoadNotes={onLoadNotes} onSetColor={this.onSetColor}/>
            </div>
        )
    }
}