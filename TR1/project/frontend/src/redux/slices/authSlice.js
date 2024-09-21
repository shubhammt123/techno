import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
    error : null,
    user : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setLoading : (state)=>{
            state.isLoading = true
            state.user = null
            state.error = null
        },
        setSuccess : (state,action)=>{
            state.isLoading = false,
            state.user = action.payload,
            state.error = null
        },
        setError : (state, action)=>{
            state.isLoading = false,
            state.error = action.payload
        }
    }
});

export const { setLoading , setSuccess , setError }  = authSlice.actions;

export default authSlice.reducer;