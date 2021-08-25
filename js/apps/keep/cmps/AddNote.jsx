import { utilServices } from '../services/util.services.js'
export class AddNote extends React.Component {
    state = {
        note:{
            txt : '',
            id: utilServices.makeId()
        }
    }

    // componentDidMount() {
    //     utilServices.makeId().then((newId)=> this.setState({ id } }))
    //     debugger
    //     // const {id} = this.state.note
    //     // this.setNoteId()
    // }

    // setNoteId = ()=>{
    // }

    onChange = (ev) => {
        const field =ev.target.name
        const value = ev.target.value
        this.setState( { note: { ...this.state.note, [field]: value } })
        // this.props.onUpdateNote(this.state.note)
    }
    
    onSubmit = (event) => {
        event.preventDefault()
        // this.onUpdateNote(this.state.noteId)
        // this.onAddNote()
        // eventBusService.emit('review-submit' , false)
        const {txt }= this.state.note
        // this.setState({txt})
        const {note}= this.state
        this.props.onAddNote(note)
        // console.log(nodeId)
    }

    render() {
        const { txt , id } = this.state.note
        console.log(id)
        return (
            <section className="add-note">
                <form className="note-form" onSubmit={this.onSubmit}>
                        <label htmlFor='txt'>Note</label>
                        <input
                            name='txt'
                            type='text'
                            placeholder='Whats on youtr mind'
                            value={txt}
                            onChange={this.onChange}
                        />
                    <button onClick={this.onSubmit}>Add</button>
                </form>
            </section>
        )
    }

}