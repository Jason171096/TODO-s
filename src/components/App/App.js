import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoWindow } from "../TodoWindow/TodoWindow";
import { PortalNewTodo } from "../Portal-NewTodo/index";
import { PortalFinishTodo } from "../Portal-FinishTodo/index";
import TodoFinish from "../TodoFinish/TodoFinish";

function App() {
  const {
    isLoading,
    isCompleted,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openPortalNewTodo,
    openPortalFinishTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    setOpenPortalNewTodo,
    setOpenPortalFinishTodo,
    addTodo,
    newTodo,
    setNewTodo,
  } = useTodos()
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {isLoading && <p>Cargando...</p>}
        {isCompleted &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              completeTodo={() => completeTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ))}
      </TodoList>
      <CreateTodoButton setOpenPortalNewTodo={setOpenPortalNewTodo} />
      {openPortalNewTodo && (
        <PortalNewTodo>
          <TodoWindow 
          setOpenPortalNewTodo={setOpenPortalNewTodo} 
          addTodo={addTodo} 
          newTodo={newTodo} 
          setNewTodo={setNewTodo} />
        </PortalNewTodo>
      )}
      {openPortalFinishTodo && (
        <PortalFinishTodo setOpenPortalFinishTodo={setOpenPortalFinishTodo}>
          <TodoFinish />
        </PortalFinishTodo>
      )}
      </React.Fragment>
  );
}

export default App;
