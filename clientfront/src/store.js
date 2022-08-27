import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./pages/loginRegisterSlice";

const store = configureStore({
  reducer: {
    client: clientReducer,
  },
});

export default store;
