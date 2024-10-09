import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('cart');
      if(!value){
        return null
      }
      return value
    } catch (e) {
      console.log(e);
    }
  };

const initialState = {
    isLoading : false,
    error : null,
    cartItem : getData() || [],
}

const savetoAsyncStorgae = async (cart)=>{
    try {
        await AsyncStorage.setItem("cart",JSON.stringify(cart))
    } catch (error) {
        console.log(error)
    }
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state,action)=>{
            state.cartItem.push(action.payload);
            savetoAsyncStorgae(state.cartItem);
        },
        loadCartFromAsyncStorage : (state,action)=>{
            state.cartItem = action.payload ||  [];
        }
    },
    
});

export const { addToCart , loadCartFromAsyncStorage }  = cartSlice.actions;



export default cartSlice.reducer;