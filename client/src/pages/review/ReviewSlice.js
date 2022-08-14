import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

const ReviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

const { actions, reducer } = ReviewSlice;
export const { setReviews } = actions;
export default reducer;
