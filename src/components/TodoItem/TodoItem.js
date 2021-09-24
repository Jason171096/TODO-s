import React from 'react';
import './TodoItem.css'

const TodoItem = (props) => {

    const check = () => {
            document.getElementById(props.id+"check").onchange = function() {
                if(this.checked === true) {
                    document.getElementById(props.id + "text").style.textDecorationLine = "line-through";
                }
                else
                    document.getElementById(props.id + "text").style.textDecorationLine = "none"
        }
    }

    return (
        <li className="List">
            <input id={props.id+"check"} className="checkbox" type="checkbox" onChange={check} onClick={props.completeTodo} checked={props.completed ? true : false}></input>
            <p id={props.id+"text"} className={`text-p ${props.completed ? 'text-completed' : 'text-incompleted'}`}>{props.text}</p>
            <span className="delete" onClick={props.deleteTodo}>X</span>
        </li>
    );
}

export { TodoItem }