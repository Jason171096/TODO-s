import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoFinish.css";
import "@lottiefiles/lottie-player";

const TodoFinish = () => {
  return (
    <div className="TodoFinish">
      <lottie-player
        autoplay
        controls
        loop
        mode="normal"
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style="width: 320px"
      ></lottie-player>
    </div>
  );
};

export default TodoFinish;
