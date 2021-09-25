import React, { useState, useEffect } from "react";
import { AppUI } from "./AppUI";

const useLocalStore = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isCompleted, setIsCompleted] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName)
    let parsedItem = initialValue
    
    if(!localStorageItem) 
      localStorageItem.setItem(itemName, JSON.stringify(parsedItem))
    else
      parsedItem = JSON.parse(localStorageItem)

    setIsLoading(false)
    setIsCompleted(true)
  
    }, 2000);
  }, [])
  
  const saveItems = (Items) => {
    setItem(Items)
    let jsonItems = JSON.stringify(Items)
    localStorage.setItem(itemName, jsonItems)
  }
  
  return {
    item,
    saveItems,
    isError, 
    isLoading,
    isCompleted
  }
  
}

function App() {
  const defaultTodos = [
    { id:1, text: "React course", completed: true },
    { id:2, text: "Complete a task", completed: false },
    { id:3, text: "Write a book", completed: false },
    { id:4, text: "Meditate for 5 minutes", completed: false },
    { id:5, text: "Public speaking", completed: false },
  ];

  const {item: todos, saveItems: saveTodos, isError, isLoading, isCompleted} = useLocalStore("TODOS_V1", defaultTodos)

  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
 
  const completeTodo = (index) => {
    const todoIndex = todos.findIndex(todo => todo.id === index);
    const newTodos = [...todos]
    if(newTodos[todoIndex].completed === true)
      newTodos[todoIndex].completed = false
    else
      newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const todoIndex = todos.findIndex(todo => todo.id === index)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  let searchedTodos = []
  if(searchedTodos.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()  
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)  
    })
  }

  return (
    <AppUI 
      isError={isError}
      isLoading={isLoading}
      isCompleted={isCompleted}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      completedTodos={completedTodos} 
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      
    />
  );
}

export default App;
