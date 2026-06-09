import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos=useSelector((state)=>state.todos);
    console.log(todos);
    const dispatch=useDispatch();

    const handleDelete=(id)=>{
        console.log(`delete ${id}`)
        dispatch(deleteTodo(id));
    }

    let styles={textDecoration:'line-through'};

    const handleMark=(id)=>{
        console.log(`mark ${id}`)
        dispatch(markAsDone(id));
    }

    return (
    <>
      <h3>Todo List App</h3>
      <AddForm/>
      <ul>
        {
            todos.map((todo)=>(
                <li key={todo.id} style={todo.isDone ? styles : {}}>
                {todo.task}
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                <button onClick={()=>handleMark(todo.id)}>Mark as Done</button>
                </li>
            ))
        }
      </ul>
    </>
    )
}