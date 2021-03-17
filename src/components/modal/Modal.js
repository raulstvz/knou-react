import React from "react";
import './Modal.css';
import Button from "../button/Button";

const Modal = ({ handleClose, visible, children }) => {
  const showHideClassName = visible ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal__main">
        {children}
        <br></br>
        <Button name="Close" style="button_dark_small" onClick={handleClose} />
      </section>
    </div>
  );
}

export default Modal