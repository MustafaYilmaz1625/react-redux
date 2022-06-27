import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartContainer() {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <selection className="cart">
        <header>
          <h2>YOUR BAG</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </selection>
    );
  }

  return (
    <selection className="cart">
      <header>
        <h2>YOUR BAG</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </selection>
  );
}

export default CartContainer;
