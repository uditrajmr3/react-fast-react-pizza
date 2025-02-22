import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload.id);
    },
    changeQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.pizzaId === id);
      if (item) {
        item.quantity = quantity;
        item.totalPrice = item.unitPrice * quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
export const getNoOfPizzas = (state) => state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
export const getTotalPrice = (state) => state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
export const getPizzaQuantity = id => (state) => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
