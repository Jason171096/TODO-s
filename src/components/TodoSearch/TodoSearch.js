import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({ setSearchValue }) => {
    return (
        <div className="TodoSearch">
            <input 
            type="text"
            className="input"
            placeholder="Search..." 
            onChange={(e) => {setSearchValue(e.target.value)}}>
            </input>
        </div>
    )
}

export { TodoSearch }