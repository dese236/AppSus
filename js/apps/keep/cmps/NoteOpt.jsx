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

    render() {
        return (
            <section className="note-opt">

                <button onClick={this.deleteNote}>delete</button>
                <input value={this.props.color} type="color" onInput={this.setColor}/>
                {/* <button onClick={this.deleteNote}></button>
                <button onClick={this.deleteNote}></button>
                <button onClick={this.deleteNote}></button>
                <button onClick={this.deleteNote}></button> */}
            </section>
        )
    }

}