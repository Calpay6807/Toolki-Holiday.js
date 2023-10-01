import { configureStore } from "@reduxjs/toolkit";
import { holidayReducer } from "./holidaySlice";
import counterReducer from "./counterSlice";
import { cartReducer } from "./cart";
import commentReducer from "./comment";

export default configureStore({
  reducer: {
    holiday: holidayReducer,
    counters: counterReducer,
    cart: cartReducer,
    comments: commentReducer, // Yorumları yönetecek dilim
  },
});
