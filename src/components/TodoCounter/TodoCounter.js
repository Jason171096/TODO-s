import React, { useContext } from "react";
import "./TodoCounter.css";
import TaskIco from "../../img/task-list.svg";
import taskListAnimated from "../../img/task-list.json";
import Lottie from "react-lottie";

const TodoCounter = ({ completedTodos, totalTodos }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: taskListAnimated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="TodoCounter">
      <div className="title">
          <div>
          <h1>¡Welcome, Jason!</h1>
          <p>Organize your tasks</p>
          </div>
        <Lottie options={defaultOptions} height={150} width={250} />
      </div>
      <div className="sub-title">
        <p>Tasks List</p>
        <h2>Today</h2>
        <p>
          Completed: {completedTodos}/{totalTodos}
        </p>
      </div>
    </div>
  );
};

export { TodoCounter };
