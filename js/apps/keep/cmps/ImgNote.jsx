import { NoteOpt } from "./NoteOpt.jsx"

export class ImgNote extends React.Component {
    state = {
        color: ''
    }

    onSetColor = (color) => {
        this.setState({ color })
        console.log(this.state);
    }
    render() {
        const { note , onLoadNotes } = this.props
        const {color} = this.state 
        return (
            <div className={`img-note-card card ${note.txt && 'txt-img-card'}`} style={{backgroundColor:color}}>
                <img src={note.src} alt="img" />
               <h4>{note.txt}</h4>
                <NoteOpt color={color} note={note} onLoadNotes={onLoadNotes} onSetColor={this.onSetColor}/>
            </div>
        )
    }
}