import React from "react";

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <button className="btn confirm-btn" type="button">
          confirm
        </button>
        <button className="btn clear-btn" type="button">
          cansel
        </button>
      </div>
    </aside>
  );
};

export default Modal;