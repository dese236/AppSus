import { NoteOpt } from "./NoteOpt.jsx"
import { TodoTesk } from "./TodoTesk.jsx"
export class TodoNote extends React.Component {
    state = {
        color: '',
        todo: {
            tesk: '',
            id: '',
            isDone: '',
            isEiddted: '',

        }

    }

    // componentDidMount() {
    //     this.setState((prevState) => ({
    //         todo: { ...this.props.note.todos.todos},
    //       }));

    // }

    onSetColor = (color) => {
        this.setState({ color })
        console.log(this.state);
    }

    toggleTeskState = (todoId) => {
        var currTodo = this.props.note.todos.find(function (todo) {
            return todoId === todo.id
        })
        currTodo.isDone = !currTodo.isDone
    }

    setEditState = (todoId) => {
        var currTodo = this.props.note.todos.find(function (todo) {
            return todoId === todo.id
        })

        console.log(currTodo);
        currTodo.isEditted = !currTodo.isEditted

    }
    deleteTesk = (todoId, todos) => {
        var todoIdx = this.props.note.todos.findIndex(function (todo) {
            return todoId === todo.id
        })
        todos.splice(todoIdx, 1)

    }

    editTesk = (e, todo)=> {
        const value = e.target.value
        const field = e.target.name
        todo.tesk = value
        this.setState({todo: {...todo, [field]:todo}})
    }

    render() {
        const { note, onLoadNotes } = this.props
        const { todos } = note
        const { color } = this.state
        console.log(note);
        return (
            <div className={'todo-note-card card'} style={{ backgroundColor: color }}>
                {/* <img src={note.img} alt="img" /> */}
                <h2>{note.title}</h2>

                {todos && todos.map((todo) => {
                    console.log(todo, "im the todo to be printed");
                    return (

                        <div className="todo">
                            <div className="todo-content">
                                {!todo.isDone && <img onClick={() => this.toggleTeskState(todo.id)} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg==" />}
                                {todo.isDone && <img onClick={() => this.toggleTeskState(todo.id)} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPgogIDxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz4KPC9zdmc+Cg==" />}
                                <TodoTesk todo={todo} isDone={todo.isDone} editTesk={this.editTesk} setEditState={this.setEditState} />

                            </div>
                            < img className="todo-delete-btn" onClick={(e) => this.deleteTesk(todo.id, todos)} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=" />

                        </div>
                    )
                })}


                <small>{note.noteDate}'</small>
                <NoteOpt color={color} note={note} onLoadNotes={onLoadNotes} onSetColor={this.onSetColor} />
            </div>
        )
    }
}