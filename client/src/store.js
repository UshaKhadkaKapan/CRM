import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-registration/loginRegisterSlice";
import systemReducer from "./pages/system-state/SystemSlice";
import categoryReducer from "./pages/Categories/catSlice";
import paymentMethodReducer from "./pages/paymentMethod/paymentMethodSlice";
import productReducer from "./pages/products/productSlice";
import orderReducer from "./pages/orders/OrderSlice";

const store = configureStore({
  reducer: {
    adminUser: loginReducer,
    system: systemReducer,
    categories: categoryReducer,
    paymentMethod: paymentMethodReducer,
    products: productReducer,
    orders: orderReducer,
  },
});

export default store;
