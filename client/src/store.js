import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-registration/loginRegisterSlice";

export const store = configureStore({
  reducer: {
    user: loginReducer,
  },
});
