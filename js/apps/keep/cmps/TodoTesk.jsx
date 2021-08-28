export function TodoTesk ({todo , isDone ,setEditState, editTesk }){
    return(
        <div>
        {!todo.isEditted && <div onClick={()=> setEditState(todo.id)}>
            {!todo.isEditted && <h5 style={{textDecoration: isDone ? 'line-through' : 'none'}}>{todo.tesk}</h5>}
            {todo.isEditted && <input placeholder="Add new todo" className="todo-tesk" value={todo.tesk} name="tesk" type="text" onChange={(e) => editTesk(e , todo)} />}

        </div>}
        {todo.isEditted && <div onDoubleClick={()=> setEditState(todo.id)}>
            {!todo.isEditted && <h5 style={{textDecoration: isDone ? 'line-through' : 'none'}}>{todo.tesk}</h5>}
            {todo.isEditted && <input placeholder="Add new todo" className="todo-tesk" value={todo.tesk} name="tesk" type="text" onChange={(e) => editTesk(e , todo)} />}

        </div>}

        </div>
    
    ) 
}