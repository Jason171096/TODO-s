import React, { useContext } from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext/index'

const CreateTodoButton = () => {
    const { setOpenPortal } = useContext(TodoContext)
    return (
        <div className="TodoButton" >
            <a className="button" onClick={() => setOpenPortal(true)}>+</a>
        </div>
    )
}

export { CreateTodoButton }