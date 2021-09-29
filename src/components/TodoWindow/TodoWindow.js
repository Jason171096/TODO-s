import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoWindow.css'

const TodoWindow = () => {
    const { setOpenPortalNewTodo, addTodo, newTodo, setNewTodo } = useContext(TodoContext)
    return (
        <div className="TodoWindow">
            <h2>Create new TODO</h2>
            <textarea
            className="textarea"
             placeholder="Go for a walk" 
             onChange={(e) => {setNewTodo(e.target.value)}}>
             </textarea>
            <div className="buttons">
              <a onClick={() => setOpenPortalNewTodo(false)}>Cancel</a>
              <a onClick={() => addTodo(newTodo)}>Confirm</a>
            </div>
        </div>
    )
}

export { TodoWindow }
