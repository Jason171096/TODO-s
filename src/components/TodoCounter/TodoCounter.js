import React, { useContext } from 'react';
import './TodoCounter.css'
import TaskIco from '../../img/task-list.svg'
 
const TodoCounter = ({ completedTodos, totalTodos }) => {
    return (
        <div className="TodoCounter">
            <div className="title">
                <h1>¡Welcome User!</h1>
                <div className="sub-title">
                    <div>
                        <img width='40px' height='40px' src={TaskIco} alt="Image tasks list"/>
                        <p>Tasks List</p>
                    </div>
                    <h2>Today</h2>
                    <p>Completed: {completedTodos}/{totalTodos}</p>
                </div>
            </div>
        </div>
    )
}

export { TodoCounter }
