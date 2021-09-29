import React, { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext/index'
import './TodoSearch.css';

const TodoSearch = () => {
    const { searchValue, setSearchValue } = useContext(TodoContext)
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