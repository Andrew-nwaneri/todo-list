import React, { useState } from "react";
import "./components.css";


const TodoForm = ({addTodo}) => {

    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
            e.preventDefault();
            addTodo(task)
            setTask('')
        };

    return(
<div className="todo-form-wrapper">
  <form onSubmit={handleSubmit} className="todo-form">
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="What are we doing today?"
      className="input-form"
    />
    <button type="submit" className="submit-btn">Submit</button>
  </form>
</div>

    );
}

export default TodoForm;