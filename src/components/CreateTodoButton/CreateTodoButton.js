import React, { useContext } from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext/index'

const CreateTodoButton = () => {
    const { setOpenPortal } = useContext(TodoContext)
    return (
        <div className="TodoButton" onClick={() => setOpenPortal(true)}>
            <a className="button">+</a>
        </div>
    )
}

export { CreateTodoButton }