import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk(
    'auth/signup',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.post("http://localhost:5000/auth/signup",data);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.post("http://localhost:5000/auth/login",data);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const initialState = {
    isLoading : false,
    error : null,
    user : null,
    isAuth : false
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
    },
    extraReducers :(builder)=>{
        builder
        .addCase(signup.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(signup.fulfilled , (state,action)=>{
            state.isLoading = false,
            state.user = action.payload.data.data,
            state.error = null
        })
        .addCase(signup.rejected , (state , action)=>{
            console.log(action.payload)
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(login.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled , (state,action)=>{
            state.isLoading = false,
            state.user = action.payload.data.data,
            state.isAuth = true,
            state.error = null
        })
        .addCase(login.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
    }
});

// export const { setLoading , setSuccess , setError }  = authSlice.actions;

// export const signupUser =(data)=>{
//     return async (dispatch)=>{
//         dispatch(setLoading());
//         try {
//             const response = await axios("http://localhost:5000/auth/signup",data);
//             dispatch(setSuccess(response.data.data))
//         } catch (error) {
//             dispatch(setError(error));
//         }
//     }
// }


export default authSlice.reducer;