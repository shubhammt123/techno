import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const signup = createAsyncThunk(
    'auth/signup',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.post("https://techno-navy.vercel.app/auth/signup",data);
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
            const response = await axios.post("https://techno-navy.vercel.app/auth/login",data);
            console.log(response.data);
            localStorage.setItem("token" , response.data.token);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const getRole = ()=>{
    const token = localStorage.getItem("token");
    if(token){
        const decodedToken = jwtDecode(token);
        return decodedToken.role
    }
    return null
}

const getUser = ()=>{
    const token = localStorage.getItem("token");
    if(token){
        const decodedToken = jwtDecode(token);
        return decodedToken
    }
    return null
}

const initialState = {
    isLoading : false,
    error : null,
    user : getUser(),
    isAuth : localStorage.getItem("token") ? true : false,
    role : getRole(),
    token : localStorage.getItem("token")
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        logout : (state)=>{
            state.isAuth = false;
            state.role = null;
            state.token = null;
            localStorage.removeItem("token");
        },
        loginWithGoogle : (state,action)=>{
            const { token , role , user } = action.payload;
            localStorage.setItem("token" , token);
            state.isAuth = true;
            state.role = role;
            state.user = user;
        }
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
            state.role = action.payload.data.data.role,
            state.isAuth = true,
            state.error = null
        })
        .addCase(login.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
    }
});

export const { logout }  = authSlice.actions;

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