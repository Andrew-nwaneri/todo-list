import TodoForm from "./todoForm"
import { TodoList } from "./todoList";
import { v4 as uuidv4 } from "uuid"
import { useState } from "react";

export const TodoMain = () => {
    

    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
            const todo = {id: uuidv4(), name: task, completed: false, isEdit: false}
            setTodos([...todos, todo])
        }


    return (
        <div>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    )
}