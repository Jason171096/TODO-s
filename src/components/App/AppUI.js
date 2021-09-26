import React from "react";
import { TodoContext } from "../TodoContext/index";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

const AppUI = () => {
  return (
    <React.Fragment>
      <TodoContext.Consumer>
        {({
          isError,
          isLoading,
          isCompleted,
          completedTodos,
          totalTodos,
          searchValue,
          searchedTodos,
          setSearchValue,
          completeTodo,
          deleteTodo,
        }) => (
          <React.Fragment>
            <TodoCounter
              completedTodos={completedTodos}
              totalTodos={totalTodos}
            />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
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
          </React.Fragment>
        )}
      </TodoContext.Consumer>
    </React.Fragment>
  );
};

export { AppUI };
