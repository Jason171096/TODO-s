import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/index";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoWindow } from "../TodoWindow/TodoWindow";
import { PortalNewTodo } from "../Portal-NewTodo/index";
import { PortalFinishTodo } from "../Portal-FinishTodo/index";
import TodoFinish from "../TodoFinish/TodoFinish";

const AppUI = () => {
  const {
    isLoading,
    isCompleted,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openPortalNewTodo,
    openPortalFinishTodo,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
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
      <CreateTodoButton />
      {openPortalNewTodo && (
        <PortalNewTodo>
          <TodoWindow />
        </PortalNewTodo>
      )}
      {openPortalFinishTodo && (
        <PortalFinishTodo>
          <TodoFinish />
        </PortalFinishTodo>
      )}
    </React.Fragment>
  );
};

export { AppUI };
