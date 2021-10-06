import React from "react";
import "./ChangeAlert.css";
import { withStorageAlert } from "./withStorageAlert";
import { useStorageAlert } from "./useStorageAlert";

const ChangeAlert = ({ sincronized }/*{ show, toggleShow }*/) => {
  const { show, toggleShow } = useStorageAlert(sincronized)
  if (show) {
    return (
      <div className="ChangeAlert">
        <div className="container-alert">
        <p className="paragrafh-update">
          There was changes in other tab, please update
        </p>
        <div className="container-button">
          <a className="button-update" onClick={toggleShow}>
            Ok
          </a>
        </div>
        </div> 
      </div>
    );
  } else {
    return null;
  }
};

// const changeAlertWithStorage = withStorageAlert(ChangeAlert);

export default ChangeAlert;
