export class TodoList extends React.Component {



editTesk(e , todoId){
    const tesk = e.target.value
    // const todo = getTodoById(todoId)
    todo.tesk = tesk
}
render(){
    const{todos} =this.props

    return (
        <section className="todo-list">
            {/* {!notes.length && <div>No Notes yet</div>} */}
            {todos && (todos.map((todo) => {
                if (todo) return (

                    <div className="todo-tesk" onClick={(e) => this.props.setClick(e)}>

                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg==" />
                        <input placeholder="Add new todo" className="todo-tesk" value={todo.tesk} name="todos" type="text" onChange={(e) => this.editTesk(e, todo.id)} />

                    </div>
                )

            }))}
            <div className="todo-tesk" onClick={(e) => this.props.setClick(e)}>

                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg==" />
                <input placeholder="Add new todo" className="todo-tesk" name="todos" type="text" onChange={(e) => this.editTesk(e, todo.id)} />

            </div>
        </section>
    )
}
    }



// {(e) => this.onChange(e, 'todos')}

