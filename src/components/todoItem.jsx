import React, { useState } from "react";
import "../App.css"

export const TodoItem = ({todo, index, handleDelete, handleEdit, handleClicked}) => {
  
  return(
       <div key={index}>
          <p className={`${todo.completed? 'completed' : ''}`} onClick={() => handleClicked(todo.id)}>
            {todo.name}
          </p>
          <div>
            <button onClick={() => handleEdit(todo.id)}>edit</button>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </div>
        </div>
    );
}
