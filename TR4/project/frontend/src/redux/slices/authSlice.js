import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const singup = createAsyncThunk("auth/signup",async (data  , {rejectWithValue})=>{
    try {
        const response = await axios.post("http://localhost:5000/auth/signup",data);
        return response;
    } catch (error) {
        rejectWithValue(error);
    }
})

const initialState =   {
    isLoading : false,
    user : null,
    error : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setLoading : (state)=>{
            state.isLoading = true
        },
        setSuccess : (state , action)=>{
            state.isLoading = false;
            state.user = action.payload;
        },
        setError : (state,action)=>{
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export const { setLoading ,setSuccess , setError } = authSlice.actions;




export default authSlice.reducer;