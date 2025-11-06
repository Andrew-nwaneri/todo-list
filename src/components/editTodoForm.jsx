import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

uuidv4();

const EditTodoForm = ({editTodo, todo}) => {

    const [task, setTask] = useState(todo.name);
    const id = todo.id;

    const handleSubmit = (e) => {
            e.preventDefault();
            editTodo({task, id})
            setTask('')
        };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={task} placeholder="What are we doing today?" type="text" onChange={(e) => setTask(e.target.value)}></input>
                <button type="submit">submit</button>
            </form>  
        </div>
    );
}

export default EditTodoForm;