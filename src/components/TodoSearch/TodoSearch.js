import React, { useState } from 'react';
import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue }) => {
    
    return (
        <div className="TodoSearch">
            <input 
            className="input"
            placeholder="Search TODO" 
            value={searchValue} 
            onChange={(e) => {setSearchValue(e.target.value)}}>
            </input>
        </div>
    )
}

export { TodoSearch }