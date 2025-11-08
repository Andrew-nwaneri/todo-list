import React, { useState } from "react";
import "./components.css";
import { Pencil } from "lucide-react"


const EditTodoForm = ({editTodo, todo}) => {

    const [task, setTask] = useState(todo.name);
    const id = todo.id;

    const handleSubmit = (e) => {
            e.preventDefault();
            editTodo({task, id})
            setTask('')
        };

    return(

  <form onSubmit={handleSubmit} className="edit-form">
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="What are we doing today?"
      className="input-edit-form"
    />
    <button type="submit" className="edit-submit-btn"><Pencil /></button>
  </form>

    );
}

export default EditTodoForm;