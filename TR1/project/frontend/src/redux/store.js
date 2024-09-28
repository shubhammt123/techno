import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer : {
        auth : authSlice,
        product : productSlice,
        cart : cartSlice
    }
});

export default store;