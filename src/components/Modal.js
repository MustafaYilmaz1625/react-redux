import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/Modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <button
          className="btn confirm-btn"
          type="button"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          confirm
        </button>
        <button
          className="btn clear-btn"
          type="button"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          cansel
        </button>
      </div>
    </aside>
  );
};

export default Modal;
