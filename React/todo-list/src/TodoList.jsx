import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){
    // let [todos,setTodos]=useState(['sample Task']);
    let [todos,setTodos]=useState([{task:'sample-task',id:uuidv4}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        // setTodos([...todos,newTodo]);
        setTodos([...todos,{task:newTodo,id:uuidv4()}]);
        setNewTodo("");
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value)
    }

    return(
        <>
            <input type="text" placeholder='Add a task' value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo)=>
                    // <li>{todo}</li>
                    <li key={todo.id}>{todo.task}</li>
                )}

            </ul>
        </>
    )
}