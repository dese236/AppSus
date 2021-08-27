import {Tesk} from './Tesk.jsx'
import { utilServices } from '../services/util.services.js'

export class TodoList extends React.Component {
state = {
    todo : {
        tesk: '' ,
        id : utilServices.makeId(),
        isDone : false

    }
}

onAddNewtesk = ()=>{
    console.log(this.state);
    this.props.addNewTesk(this.state)
}
editTesk(e ){
    const value = e.target.value
    const field = e.target.name
    // let {tesk } =this.state.todo
    this.setState({todo: {...this.state.todo,[field]:value} })
    // let {todo} = todos.find((todo)=> {
    //    return todoId === todo.id
    // })
    // todo.tesk = tesk
    console.log(this.state , 'ths is the todo')
}
render(){

    const{todos} =this.props
    console.log('this is todos' , todos);
    const{tesk} =this.state.todo
    return (
        <section className="todo-list">
            {/* {!notes.length && <div>No Notes yet</div>} */}
            {todos && (todos.map((todo) => {
                if (todo) return (

                    <Tesk todo={todo} setClick={this.props.setClick} editTesk={this.editTesk}/>

                )

            }))}
            <div className="todo-tesk" onClick={(e) => this.props.setClick(e)}>

                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnoiLz4KPC9zdmc+Cg==" />
                <input placeholder="Add new todo" className="todo-tesk" value={tesk} name="tesk" type="text" onChange={(e) => this.editTesk(e)} />

            </div>
            <div className="add-new-tesk" onClick={this.onAddNewtesk}>
            <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMzggMjZoLTEydjEyaC00di0xMmgtMTJ2LTRoMTJ2LTEyaDR2MTJoMTJ2NHoiLz4KIDxwYXRoIGQ9Im0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K"></img>
            <small>add new todo</small>
            </div>
        </section>
    )
}
    }



// {(e) => this.onChange(e, 'todos')}

