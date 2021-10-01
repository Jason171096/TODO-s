import React from "react";
import "./TodoList.css";

const TodoList = ({
  isLoading,
  searchedTodos,
  totalTodos,
  onLoading,
  onEmptyTodos,
  render,
}) => {
  return (
    <div className="TodoList">
      {isLoading && onLoading()}
      {(!isLoading && !totalTodos) && onEmptyTodos()}
      <ul className="ul">{searchedTodos.map(render)}</ul>
    </div>
  );
};

export { TodoList };
