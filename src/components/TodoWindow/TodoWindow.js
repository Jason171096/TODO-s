import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoWindow.css'

const TodoWindow = () => {
    const { setOpenPortal, addTodo, newTodo, setNewTodo } = useContext(TodoContext)
    return (
        <div className="TodoWindow">
            <h2>Create new TODO</h2>
            <textarea className="textarea"
             placeholder="Do cooking" 
             onChange={(e) => {setNewTodo(e.target.value)}}>
             </textarea>
            <div className="buttons">
              <a onClick={() => setOpenPortal(false)}>Cancel</a>
              <a onClick={() => addTodo(newTodo)}>Confirm</a>
            </div>
        </div>
    )
}

export { TodoWindow }
