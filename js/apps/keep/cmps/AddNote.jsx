//import { axios } from '../../../../lib/axios.js'
import { utilServices } from '../services/util.services.js'
export class AddNote extends React.Component {
    state = {
        note: {
            txt: '',
            src: '',
            id: utilServices.makeId(),
            noteType: 'txt'
        },

        selectedFile: null
    }

    // componentDidMount() {
    //     .then(newId=> this.setState({ note: { ...this.state.note, [id]: newId } }))
    //     debugger
    // const {id} = this.state.note
    // this.setNoteId()
    // }

    // setNoteId = ()=>{
    // }

    onChange = (ev) => {
        // const field = ev.target.name
        const value = ev.target.value
        this.setState({ note: { ...this.state.note, [this.state.note.noteType]: value } })
        // this.props.onUpdateNote(this.state.note)
    }

    onSubmit = (ev) => {
        this.onChange(ev)
        console.log('im here');
        ev.preventDefault()
        // const value = ev.target.value
        // this.onUpdateNote(this.state.noteId)
        // this.onAddNote()
        // eventBusService.emit('review-submit' , false)
        // const { noteType } = this.state.note
        // this.setNoteInnerTxt(noteType, value)
        // this.setState({ txt })
        const { note } = this.state
        this.props.onAddNote(note)
        // console.log(nodeId)
        this.setState({
            note: {
                txt: '',
                src: '',
                id: utilServices.makeId(),
                noteType: 'txt'
            }
        })
    }

    // setNoteInnerTxt = (noteType) => {
    //     if (noteType === 'txt') this.state.note.txt = value
    //     else this.state.note.src = value

    // }

    setNoteType = (ev) => {
        this.state.note.noteType = 'src';
        const { noteType } = this.state.note
        this.setState({ noteType })

    }



    render() {
        const { txt, id, noteType } = this.state.note
        console.log(id)
        return (
            <section className="add-note">
                <form className="note-form" onSubmit={this.onSubmit}>
                    <label htmlFor='txt'>Note</label>
                    <input
                        name='txt'
                        type='text'
                        placeholder='enter text'
                        value={txt}
                        onChange={this.onChange}
                    />
                    <button onClick={this.onSubmit}>Add</button>
                </form>
                <input type="button" name="img"  onClick={this.setNoteType}/>

            </section>
        )
    }
}