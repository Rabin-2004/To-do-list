import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { addTodo} from "./slice/todolist/todoListSlice"
import "./todoform.css"


const Todoform = () => {

    const dispatch = useDispatch();
    const [todo, setTodo] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (todo.trim()){
          dispatch(addTodo({
            description: todo,
            completed: false,
          }))
        }
        setTodo('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

  return (
    <>
    <h1 className="header">TodoList</h1>
    <form onSubmit={handleSubmit} className="add-todo">
    <input type="text" value={todo} onChange={handleChange} placeholder="Enter your plans" id="todo"/>
    <button type="submit" id="submit">Add to List</button>
    </form>
    </>
  )
}

export default Todoform