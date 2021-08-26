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
                <div className="txt-note-card card" style={{backgroundColor:color}}>
                    <NoteOpt note={note} onLoadNotes={onLoadNotes} />
                    <h4>{note.txt}</h4>
                </div>
            )
    }

}