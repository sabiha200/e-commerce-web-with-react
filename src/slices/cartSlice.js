import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart'))
    || [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
          localStorage.setItem("cart", JSON.stringify(state.cart))
    },
  },
});

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
