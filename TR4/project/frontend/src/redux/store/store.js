import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import productSlice from "../slices/productSlice";

const store = configureStore({
    reducer : {
        auth : authReducer,
        product : productSlice
    }
});

export default store;