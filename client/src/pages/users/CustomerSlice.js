import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
};

const CustomerSlice = createSlice({
  name: "custumers",
  initialState,
  reducers: {
    setCustomers: (state, { payload }) => {
      state.customers = payload;
    },
  },
});

const { actions, reducer } = CustomerSlice;
export const { setCustomers } = actions;
export default reducer;
