import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoFinish.css";
import Lottie from "react-lottie"
import checkAnimated from '../../img/check.json' 

const TodoFinish = () => {
  const { setOpenPortalFinishTodo } = useContext(TodoContext)
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: checkAnimated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="TodoFinish">
      <h1>¡Congratulations!</h1>
      <Lottie options={defaultOptions}
        height={180}
        width={300} />
        <a className="buttonFinish" onClick={() => {setOpenPortalFinishTodo(false)}}>Confirm</a>
    </div>
  );
};

export default TodoFinish;
