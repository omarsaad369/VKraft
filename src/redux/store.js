import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/productSlice";
import customizationReducer from "./slices/customizationSlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
import orderReducer from "./slices/orderSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    customization: customizationReducer,
    cart: cartReducer,
    auth: authReducer,
    orders: orderReducer,
    users: userReducer,
  },
});

export default store;
