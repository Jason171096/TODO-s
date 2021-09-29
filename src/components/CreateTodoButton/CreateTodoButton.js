import React, { useContext } from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext/index'

const CreateTodoButton = () => {
    const { setOpenPortalNewTodo } = useContext(TodoContext)
    return (
        <div className="TodoButton" >
            <a className="button" onClick={() => setOpenPortalNewTodo(true)}>+</a>
            <p>Developer <strong>Jason</strong></p>
        </div>
    )
}

export { CreateTodoButton }