import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  totalPrice: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      const selectedHoliday = action.payload.selectedHoliday;
      state.counter += 1;
      state.totalPrice += selectedHoliday.price;
    },
    decrementCounter: (state, action) => {
      if (state.counter > 0) {
        const selectedHoliday = action.payload.selectedHoliday;
        state.counter -= 1;
        state.totalPrice -= selectedHoliday.price;
      }
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter, updateTotalPrice } =
  counterSlice.actions;
export default counterSlice.reducer;
