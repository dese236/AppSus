
export class Tesk extends React.Component {

    render() {
        const {todo}= this.props
        return (
            <div className="todo-tesk" onClick={(e) => this.props.setClick(e)}>

            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg==" />
            <input placeholder="whats need to be done?" className="todo-tesk" value={todo.tesk} name="todos" type="text" onChange={(e) => this.props.editTesk(e)} />
        </div>
        )
    }
}