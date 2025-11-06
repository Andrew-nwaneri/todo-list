import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

uuidv4();

const TodoForm = ({addTodo}) => {

    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
            e.preventDefault();
            addTodo(task)
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

export default TodoForm;