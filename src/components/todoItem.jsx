import React, { useState } from "react";
import "./components.css";
import { Trash2, Pencil } from "lucide-react"

export const TodoItem = ({todo, index, handleDelete, handleEdit, handleClicked}) => {
  
  return(
       <div key={index} className="todo-item">
  <label className="task-container">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => handleClicked(todo.id)}
      className="task-checkbox"
    />
    <p className={`task ${todo.completed ? 'completed' : ''}`}>
      {todo.name}
    </p>
  </label>

  <div className="actions">
    <button onClick={() => handleEdit(todo.id)} className="edit">
      <Pencil />
    </button>
    <button onClick={() => handleDelete(todo.id)} className="delete">
      <Trash2 />
    </button>
  </div>
</div>

    );
}
