import React from "react";
import ReactDOM from "react-dom";
import "./Portal.css";

const Portal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="portal-children">{children}</div>,
    document.getElementById("portal")
  );
};

export { Portal };
