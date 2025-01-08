import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from './slice/todolist/todoListSlice'
import { RootState } from './redux/store'
import './todolist.css'

const Todolist = () => {

    const dispatch = useDispatch();

    const todos = useSelector((state:RootState) => state.todoList);

    const handleRemove = (id:number) => {
        dispatch(removeTodo(id));
    }

    const handleComplete = (id:number) => {
        dispatch(toggleTodo(id));
    }

    function capitalizeFirstLetter(a: string): string {
      return a.charAt(0).toUpperCase() + a.slice(1);
    }
    

  return (
    <main>
    <ul>
        {todos.map( (todo:any)=> (
            <li key={todo.id}> 
             <input type="checkbox" checked={todo.completed || false} onChange={()=>handleComplete(todo.id)}/>
            <span style={{
               textDecoration: todo.completed? "line-through" : "none",
            }}> {capitalizeFirstLetter(todo.description || '')} </span>
            <button onClick={() => handleRemove(todo.id)}> Delete </button>
           </li>
        ) )}
    </ul>
    </main>
  )
}

export default Todolist