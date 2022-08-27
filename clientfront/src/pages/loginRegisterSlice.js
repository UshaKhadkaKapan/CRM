import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {},
};

const clientLoginRegisterSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClient: (state, { payload = {} }) => {
      state.user = payload;
    },
  },
});

const { reducer, actions } = clientLoginRegisterSlice;

export const { setClient } = actions;

export default reducer;
