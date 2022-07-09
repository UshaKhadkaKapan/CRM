import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-registration/loginRegisterSlice";
import systemReducer from "./pages/system-state/SystemSlice";
import categoryReducer from "./pages/Categories/catSlice";

const store = configureStore({
  reducer: {
    user: loginReducer,
    system: systemReducer,
    categories: categoryReducer,
  },
});

export default store;
