import React from 'react';
import './TodoCounter.css'

const TodoCounter = ({ completedTodos, totalTodos }) => {
    return (
        <div className="TodoCounter">
            <div className="title">
                <h1>Tasks TODO's Platzi</h1>
                <h3>Con 💙 de Jason</h3>
                <p>Completados <strong>{completedTodos}</strong> de <strong>{totalTodos}</strong></p>
            </div>
        </div>
    )
}

export { TodoCounter }
