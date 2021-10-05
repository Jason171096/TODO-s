import React from "react";
import "./TodoList.css";

const TodoList = ({
  children,
  render,
  isLoading,
  searchedTodos,
  totalTodos,
  onLoading,
  onEmptyTodos,
}) => {
  const renderFunction = children || render
  return (
    <div className="TodoList">
      {isLoading && onLoading()}
      {(!isLoading && !totalTodos) && onEmptyTodos()}
      {(!isLoading && searchedTodos) && <ul className="ul">{searchedTodos.map(renderFunction)}</ul>}
    </div>
  );
};

export { TodoList };
