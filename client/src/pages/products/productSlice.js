import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, { payload = [] }) => {
      state.products = payload;
    },
  },
});

const { reducer, actions } = productSlice;

export const { setProduct } = actions;

export default reducer;
