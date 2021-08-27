export function TodoTesk ({todo , isDone}){
    return(

        <h5 style={{textDecoration: isDone ? 'line-through' : 'none'}}>{todo.tesk}</h5>
    ) 
}