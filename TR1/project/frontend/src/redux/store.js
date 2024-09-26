import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
    reducer : {
        auth : authSlice,
        product : productSlice
    }
});

export default store;