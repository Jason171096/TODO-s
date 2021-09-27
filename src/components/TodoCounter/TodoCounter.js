import React, { useContext } from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext/index'
import TaskIco from '../../img/task-list.svg'
 
const TodoCounter = () => {
    const { completedTodos, totalTodos } = useContext(TodoContext)
    return (
        <div className="TodoCounter">
            <div className="title">
                <h1>¡Welcome Jason!</h1>
                <div className="sub-title">
                    <div>
                        <img width='40px' height='40px' src={TaskIco}/>
                        <p>Task List</p>
                    </div>
                    <h2>Today</h2>
                    <p>Completed: {completedTodos}/{totalTodos}</p>
                </div>
            </div>
        </div>
    )
}

export { TodoCounter }
