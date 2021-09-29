import React, { useContext } from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext/index'

const CreateTodoButton = () => {
    const { setOpenPortal } = useContext(TodoContext)
    return (
        <div className="TodoButton" >
            <a className="button" onClick={() => setOpenPortal(true)}>+</a>
            <p>Developer <strong>Jason</strong></p>
        </div>
    )
}

export { CreateTodoButton }