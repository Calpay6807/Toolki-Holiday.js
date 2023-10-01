import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  options: [],
  selectedHoliday: [],

  // loading: false,
};

export const holidaySlice = createSlice({
  name: "holiday",
  initialState, // initialstate yerine initialState kullanın
  reducers: {
    setHoliday: (state, action) => {
      state.data = action.payload;
      console.log(action);
      // state.loading = true;
    },
    addHoliday: (state, action) => {
      state.options.push(action.payload);
    },

    selectHoliday: (state, action) => {
      state.selectedHoliday = action.payload;
    },
    // removeItem: (state, action) => {
    //   state.data = state.data.filter((item) => item.id !== action.payload);

    //   state.options = state.options.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
  },
});

export const { setHoliday, addHoliday, selectHoliday } = holidaySlice.actions;
export const holidayReducer = holidaySlice.reducer; // export ekleyin ve holidaySlice.reducer yerine holidayReducer kullanın
