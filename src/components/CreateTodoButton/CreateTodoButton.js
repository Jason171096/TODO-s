import React from 'react';
import './CreateTodoButton.css'

const CreateTodoButton = ({ setOpenPortalNewTodo }) => {
    return (
        <div className="TodoButton" >
            <a className="button" onClick={() => setOpenPortalNewTodo(true)}>+</a>
            <p>Developer <strong>Jason</strong></p>
        </div>
    )
}

export { CreateTodoButton }