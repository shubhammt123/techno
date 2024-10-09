import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    isLoading : false,
    error : null,
    cartItem : JSON.parse(localStorage.getItem("cart")) || [],
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state,action)=>{
            state.cartItem.push(action.payload);
            localStorage.setItem("cart" , JSON.stringify(state.cartItem))
        }
    },
    
});

export const { addToCart }  = cartSlice.actions;



export default cartSlice.reducer;