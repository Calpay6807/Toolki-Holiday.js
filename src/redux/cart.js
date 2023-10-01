// In a new file, e.g., cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // This array will hold cart items
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Add the item to the cart
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
