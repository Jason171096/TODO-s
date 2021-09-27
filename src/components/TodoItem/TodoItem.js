import React from 'react';
import './TodoItem.css'
import deleteIco from '../../img/delete.svg'

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
            <input id={props.id+"check"} type="checkbox" onChange={check} onClick={props.completeTodo} checked={props.completed ? true : false}/>           
            <p id={props.id+"text"} className={`text-p ${props.completed ? 'text-completed' : 'text-incompleted'}`}>{props.text}</p>
            <img src={deleteIco} className="delete" onClick={props.deleteTodo} />
        </li>
    );
}

export { TodoItem }