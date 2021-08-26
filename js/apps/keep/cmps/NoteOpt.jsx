import {noteServices} from '../services/note.service.js'
export class NoteOpt extends React.Component {
    
    deleteNote = () => {
        noteServices.deleteNote(this.props.note.id).then(()=> {
            this.props.onLoadNotes()
        })
    }
    
    setColor = (ev) => {
        const color = ev.target.value
        this.props.onSetColor(color)
    }
    
    duplicateNote = () => {
        noteServices.duplicateNote(this.props.note).then(()=> {
            this.props.onLoadNotes()
        })

    }

    pinNote = () => {
        noteServices.pinNote(this.props.note).then(()=> {
            this.props.onLoadNotes()
        })
    }

    render() {
        const {color} = this.props
        return (
            <section className="note-opt">

                <button onClick={this.deleteNote}>delete</button>
                <button onClick={this.duplicateNote}>duplicate</button>
                <button onClick={this.pinNote}>pin</button>
                <input value={color} type="color" onChange={this.setColor}/>
            </section>
        )
    }

}

