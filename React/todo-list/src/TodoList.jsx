import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){
    // let [todos,setTodos]=useState(['sample Task']);
    let [todos,setTodos]=useState([{task:'sample-task',id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        // setTodos([...todos,newTodo]);
        setTodos([...todos,{task:newTodo,id:uuidv4(),isDone:false}]);
        setNewTodo("");
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value)
    }

    let deleteTodo=(id)=>{
        // console.log(id);
        // setTodos(todos.filter((todo)=>todo.id!=id));
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    let upperCaseAll=()=>{
        let newArr=todos.map((todo)=>{
            return {
                ...todo,
                task:todo.task.toUpperCase()
            };
        });
        // console.log(newArr);
        setTodos(newArr);
    }

    let upperCaseOne=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id===id){
                    return {
                    ...todo,
                    task:todo.task.toUpperCase()
                    };
                }else{
                    return todo;
                }
            })
        );
    }

    let markAsDone=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id===id){
                    return {
                    ...todo,
                    isDone:true
                    };
                }else{
                    return todo;
                }
            })
        );
        // console.log('Done')
    }

    let markAllAsDone=()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
            return {
                ...todo,
                isDone:true
            };
        }));
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
                    <li key={todo.id}>
                        <span style={todo.isDone?{textDecorationLine:'line-through'}:{}}>{todo.task}</span> &nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>upperCaseOne(todo.id)}>Upper Case One</button>&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>
                    </li>
                )}

            </ul>
            <button onClick={upperCaseAll}>Upper Case All</button>
            <button onClick={markAllAsDone}>Mark All as Done</button>
        </>
    )
}