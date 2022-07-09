import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
  showModal: true,
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    toggleShowModel: (state) => {
      state.showSideMenu = !state.showSideMenu;
    },
    toggleShowModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { toggleShowSideMenu, toggleShowModal } = actions;

export default reducer;
