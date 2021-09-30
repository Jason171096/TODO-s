import React, { useContext } from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue }) => {
    return (
        <div className="TodoSearch">
            <input 
            type="text"
            className="input"
            placeholder="Search..." 
            value={searchValue} 
            onChange={(e) => {setSearchValue(e.target.value)}}>
            </input>
        </div>
    )
}

export { TodoSearch }