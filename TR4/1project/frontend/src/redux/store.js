import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer : {
        auth : authSlice,
        product : productSlice,
        cart : cartSlice,
        user : userSlice
    }
});

export default store;