import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    count : 0,
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state)=>{
            state.count += 1;
        },
        decrement : (state)=>{
            state.count -= 1;
        },
        resetCount : (state)=>{
            state.count = 0
        },
        updateByValue : (state,action)=>{
            state.count = state.count  + action.payload
        }
    }
});


export const { increment , decrement , resetCount , updateByValue } = counterSlice.actions;

export default counterSlice.reducer;