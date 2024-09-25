import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const signup = createAsyncThunk("auth/signup",async (data  , {rejectWithValue})=>{
    try {
        const response = await axios.post("http://localhost:5000/auth/signup",data);
        return response.data.data;
    } catch (error) {
        rejectWithValue(error);
    }
})
export const login = createAsyncThunk("auth/login",async (data  , {rejectWithValue})=>{
    try {
        const response = await axios.post("http://localhost:5000/auth/login",data);
        localStorage.setItem("token" , response.data.token);
        return response.data.data;
    } catch (error) {
        rejectWithValue(error);
    }
})

const getRole = ()=>{
    const token = localStorage.getItem("token");
    if(token){
        const decodedToken = jwtDecode(token);
        return decodedToken.role;
    }
    return null;
}

const initialState =   {
    isLoading : false,
    user : null,
    error : null,
    isAuth : localStorage.getItem("token") ? true : false,
    role : getRole()
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        logOut : (state,action)=>{
            localStorage.removeItem("token");
            state.isAuth = false;
            state.role =  null
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(signup.pending,(state,action)=>{
            state.isLoading = true;
            state.user = null
        })
        .addCase(signup.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.user = action.payload
        })
        .addCase(signup.rejected,(state,action)=>{
            state.isLoading = false;
            state.error =  action.payload
        })
        .addCase(login.pending,(state,action)=>{
            state.isLoading = true;
            state.user = null
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.user = action.payload;
            state.role = action.payload.role;
            state.isAuth = true;
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false;
            state.error =  action.payload
        })
    }
})

export const { logOut } = authSlice.actions;

export default authSlice.reducer;