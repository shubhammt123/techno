import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const store = configureStore({
    reducer : {
        counter : counterReducer
    }
});

export default store;
