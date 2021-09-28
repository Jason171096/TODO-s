import React, { createContext, useState } from "react";
import { useLocalStore } from "./useLocalStorage";
const TodoContext = createContext();

const TodoProvider = (props) => {
  const defaultTodos = [
    { id: 1, text: "React course", completed: true },
    { id: 2, text: "Complete a task", completed: false },
    { id: 3, text: "Write a book", completed: false },
    { id: 4, text: "Meditate for 5 minutes", completed: false },
    { id: 5, text: "Public speaking", completed: false },
  ];

  const {
    item: todos,
    saveItems: saveTodos,
    isError,
    isLoading,
    isCompleted,
  } = useLocalStore("TODOS_V1", defaultTodos);

  const [searchValue, setSearchValue] = useState("");
  const [openPortal, setOpenPortal] = useState(false);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (index) => {
    const todoIndex = todos.findIndex((todo) => todo.id === index);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed === true)
      newTodos[todoIndex].completed = false;
    else newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const todoIndex = todos.findIndex((todo) => todo.id === index);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  let searchedTodos = [];
  if (searchedTodos.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  return (
    <TodoContext.Provider
      value={{
        isError,
        isLoading,
        isCompleted,
        totalTodos,
        searchedTodos,
        searchValue,
        setSearchValue,
        completedTodos,
        completeTodo,
        deleteTodo,
        openPortal,
        setOpenPortal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }
