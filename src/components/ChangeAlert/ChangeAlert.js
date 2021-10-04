import React from "react";
import "./ChangeAlert.css"
import { withStorageAlert } from "./withStorageAlert";


const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div className="ChangeAlert">
        <p>Hubo cambios</p>
        <a className="button-update" onClick={toggleShow}>Actualizar</a>
      </div>
    );
  } else {
      return null
  }
};

const changeAlertWithStorage = withStorageAlert(ChangeAlert);

export default changeAlertWithStorage;
