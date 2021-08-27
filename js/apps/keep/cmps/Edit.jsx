import { utilServices } from '../services/util.services.js'
import { TodoList } from './TodoList.jsx';
export class Edit extends React.Component {
    state = {
        note: {
            title: '',
            txt: '',
            img: '',
            todos: [],
            noteTime: '',
            id: utilServices.makeId(),
            noteType: 'txt',
            color: ''
        },
    }

    componentDidMount() {
        this.addNewTesk()
    }

    addNewTesk = (todo) =>{
        console.log(todo , 'this is the argument  todo for adding')
        // let {todos} = this.state.note 
        // let {todos} = this.state.note
        // console.log(todos , 'todos are before:');
        this.setState({todos :this.state.note.todos.push(todo)})
        console.log(this.state , 'todos are :');
    }

    setClick = (ev) => {
        console.log('whatss up');
        ev.stopPropagation();
        this.props.openContent()
    }

    setType = (ev, type) => {
        ev.stopPropagation();
        console.log(ev.target);
        this.state.note.noteType = type;
        const { noteType } = this.state.note
        this.setState({ noteType })
    }

    onChange = (ev, field) => {
        const value = ev.target.value
        if(field === 'todos') return this.upDateTodos(value , field)
        this.setState({ note: { ...this.state.note, [field]: value } })
    

        // if(field==='todos' && value) this.removeTesk()
    }

    upDateTodos = (todoStr , field) => {

        console.log('todolis ', todoStr , 'field' , field);
        this.createTodos(todoStr).then((todos)=> {
            this.setState({ note: { ...this.state.note, [field]: todos } })
            
        })
        
    }

    createTodos = (todoStr) => {
        const todos = todoStr.split(',').map((todo)=>{
            return {tesk : todo , id:  utilServices.makeId(), isDone  :false , isEditted : false}
        })

        console.log(todos , 'as array')
        return Promise.resolve(todos)
    }
    // onChangeUrl = (ev) => {
    //     this.setNoteType()
    //     const value = ev.target.value
    //     const field = ev.target.name
    //     this.setState({ note: { ...this.state.note, [field]: value } })
    // }

    onSubmit = (ev) => {
        ev.preventDefault()
        ev.target.value = ''
        this.setState({ note: { ...this.state.note, noteTime: JSON.stringify(new Date().toISOString().split("T")[0]) } })
        const { note } = this.state

        this.props.onAddNote(note)
        this.setState({
            note: {
                title: '',
                txt: '',
                img: '',
                todos: [],
                noteTime: '',
                id: utilServices.makeId(),
                noteType: 'txt',
                color: '',
                isDeleted: false ,
                isPined: false , 
            }
        })
        console.log('note is the note thata wass add  :', note);
    }

    render() {
        const { isNoteContentOpen } = this.props
        const { title, noteType , todos } = this.state.note
        return (
            <section className="edit" onClick={this.setClick}>
                <form className="note-form" onSubmit={this.onSubmit}>
                    <input onChange={(e) => this.onChange(e, 'title')} name='title' value={title} type="text" placeholder="Title" className={`note-title ${isNoteContentOpen && 'clicked'}`} onClick={this.setClick} />
                    {isNoteContentOpen &&
                        <div className="note-edit" >
                            {noteType === 'txt' && <input placeholder="Whats on your mind?" className="note-content" name="content" type="textarea" onClick={this.setClick} onChange={(e) => this.onChange(e, 'txt')} />}
                            {noteType === 'img' && <input placeholder="Enter image url" className="note-content" name="content" type="textarea" onClick={this.setClick} onChange={(e) => this.onChange(e, 'img')} />}
                            {noteType === 'todos' && <input placeholder="Enter Todo list, separated by commas" className="note-content" name="content" type="textarea" onClick={this.setClick} onChange={(e) => this.onChange(e, 'todos')} />}
                            
                            
                            {/* {noteType === 'todos' && <TodoList todos={todos} setClick={this.setClick}  addNewTesk={this.addNewTesk}/>} */}
                            <div className="note-edit-icons" onClick={this.setClick}>
                                <img onClick={this.onSubmit} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMzggMjZoLTEydjEyaC00di0xMmgtMTJ2LTRoMTJ2LTEyaDR2MTJoMTJ2NHoiLz4KIDxwYXRoIGQ9Im0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K" />
                                <img onClick={(e) => this.setType(e, 'txt')} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTguNjQgNC43NUwyMCA2LjExbC03Ljc5IDcuNzktMS4zNi0xLjM2IDcuNzktNy43OW0wLTJjLS41MSAwLTEuMDIuMi0xLjQxLjU5bC03Ljc5IDcuNzljLS43OC43OC0uNzggMi4wNSAwIDIuODNsMS4zNiAxLjM2Yy4zOS4zOS45LjU5IDEuNDEuNTkuNTEgMCAxLjAyLS4yIDEuNDEtLjU5bDcuNzktNy43OWMuNzgtLjc4Ljc4LTIuMDUgMC0yLjgzbC0xLjM1LTEuMzVjLS4zOS0uNC0uOS0uNi0xLjQyLS42ek03IDE0LjI1Yy0xLjY2IDAtMyAxLjM0LTMgMyAwIDEuMzEtMS4xNiAyLTIgMiAuOTIgMS4yMiAyLjQ5IDIgNCAyIDIuMjEgMCA0LTEuNzkgNC00IDAtMS42Ni0xLjM0LTMtMy0zeiIvPgo8L3N2Zz4K" />
                                <img onClick={(e) => this.setType(e, 'img')} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0em0tNS03bC0zIDMuNzJMOSAxM2wtMyA0aDEybC00LTV6Ii8+Cjwvc3ZnPgo=" />
                                <img onClick={(e) => this.setType(e, 'todos')} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPgogIDxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz4KPC9zdmc+Cg==" />
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMjJDNi40OSAyMiAyIDE3LjUxIDIgMTJTNi40OSAyIDEyIDJzMTAgNC4wNCAxMCA5YzAgMy4zMS0yLjY5IDYtNiA2aC0xLjc3Yy0uMjggMC0uNS4yMi0uNS41IDAgLjEyLjA1LjIzLjEzLjMzLjQxLjQ3LjY0IDEuMDYuNjQgMS42N0EyLjUgMi41IDAgMCAxIDEyIDIyem0wLTE4Yy00LjQxIDAtOCAzLjU5LTggOHMzLjU5IDggOCA4Yy4yOCAwIC41LS4yMi41LS41YS41NC41NCAwIDAgMC0uMTQtLjM1Yy0uNDEtLjQ2LS42My0xLjA1LS42My0xLjY1YTIuNSAyLjUgMCAwIDEgMi41LTIuNUgxNmMyLjIxIDAgNC0xLjc5IDQtNCAwLTMuODYtMy41OS03LTgtN3oiLz48Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KICA8Y2lyY2xlIGN4PSI5LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE0LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KPC9zdmc+Cg==" />
                                <div className="note-edit-more-icon">
                                    <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE4IDE4IiAgZmlsbD0iIzAwMCI+CiAgPHBhdGggZD0ibTkgNS41YzEgMCAxLjgtMC44IDEuOC0xLjhzLTAuOC0xLjctMS44LTEuNy0xLjggMC44LTEuOCAxLjggMC44IDEuNyAxLjggMS43em0wIDEuN2MtMSAwLTEuOCAwLjgtMS44IDEuOHMwLjggMS44IDEuOCAxLjggMS44LTAuOCAxLjgtMS44LTAuOC0xLjgtMS44LTEuOHptMCA1LjNjLTEgMC0xLjggMC44LTEuOCAxLjhzMC44IDEuNyAxLjggMS43IDEuOC0wLjggMS44LTEuOC0wLjgtMS43LTEuOC0xLjd6Ii8+Cjwvc3ZnPgo=" />
                                </div>


                            </div>
                        </div>}
                </form>
            </section>

        )
    }
}