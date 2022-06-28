import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import CartItem from "../../components/CartItem";

const initialState = {
  cartItems: cartItems,
  amount: 5,
  total: 0,
  isloading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
