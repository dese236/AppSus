import { NoteOpt } from "./NoteOpt.jsx"
import { TodoTesk } from "./TodoTesk.jsx"
export class TodoNote extends React.Component {
    state = {
        color: ''
    }

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
                    return(
                    <div className="todo">
                      {!todo.isDone  &&<img onClick={() => this.toggleTeskState(todo.id)} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg==" />}
                      {todo.isDone &&<img onClick={() => this.toggleTeskState(todo.id)} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPgogIDxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz4KPC9zdmc+Cg==" />}
                        <TodoTesk todo={todo} isDone={todo.isDone}/>
                    </div>
                    )
                })}

          
               <small>{note.noteDate}'</small>
                    <NoteOpt color={color} note={note} onLoadNotes={onLoadNotes} onSetColor={this.onSetColor} />
            </div>
        )
    }
}