import { useState, useEffect, useLayoutEffect } from "react";
import { useLocalStore } from "./useLocalStorage";

const useTodos = () => {

  const {
    item: todos,
    saveItems: saveTodos,
    sincronizedItems: sincronized,
    isLoading,
  } = useLocalStore("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [newTodo, setNewTodo] = useState("")
  const [openPortalNewTodo, setOpenPortalNewTodo] = useState(false);
  const [openPortalFinishTodo, setOpenPortalFinishTodo] = useState(false);
  let completedTodos, totalTodos

  const lengthTodos = () => {
    completedTodos = todos.filter((todo) => !!todo.completed).length;
    totalTodos = todos.length;
    console.log(completedTodos)
  }

  lengthTodos()
  // useEffect(() => {
  //   lengthTodos()
  // })

  function refreshTodos() {
    const newTodos = [...todos]
    saveTodos(newTodos)
  }

  const finishTodos = () => {
    if(totalTodos !== 0)
      if(completedTodos === totalTodos)
        setOpenPortalFinishTodo(true)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      id: (Math.random()*100),
      completed: false,
      text,
    })
    saveTodos(newTodos)
    lengthTodos()
    setOpenPortalNewTodo(false)
  }

  const completeTodo = (index) => {
    const todoIndex = todos.findIndex((todo) => todo.id === index);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed === true)
      newTodos[todoIndex].completed = false;
    else newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    lengthTodos()
    finishTodos()
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
  return {
        isLoading,
        totalTodos,
        searchedTodos,
        searchValue,
        setSearchValue,
        completedTodos,
        completeTodo,
        deleteTodo,
        newTodo,
        setNewTodo,
        openPortalNewTodo,
        setOpenPortalNewTodo,
        openPortalFinishTodo,
        setOpenPortalFinishTodo,
        addTodo,
        sincronized,
      }
}

export { useTodos }
