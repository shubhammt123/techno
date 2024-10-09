import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "./authSlice";

export const addAdmin = createAsyncThunk(
    'auth/addAdmin',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.post("http://localhost:5000/auth/signup",data);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
export const updateUser = createAsyncThunk(
    'product/updateUser',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.put(`http://localhost:5000/auth/user/${data._id}`,data);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getAllUser = createAsyncThunk(
    'product/getAllUser',
    async (_ , {dispatch , getState  ,rejectWithValue})=>{
        // const token = localStorage.getItem("token");
        const token = getState().auth.token
        console.log(token)
        try {
            const response = await axios.get("http://localhost:5000/auth/getAllUser",{
                headers :  {
                    "Authorization" : `Bearer ${token}`
                }
            });
            const updateUsers = response.data.data.map((item,i)=>{
                return {...item , id : i+1}
            })
        return updateUsers;
        } catch (error) {
            console.log(error)
            if(error && error.response.status === 401){
                dispatch(logout());
                rejectWithValue("Unauthorized")
            }
            return rejectWithValue(error);
        }
    }
)


const initialState = {
    isLoading : false,
    error : null,
    users : [],
    isUserAdded : false
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        
    },
    extraReducers :(builder)=>{
        builder
        .addCase(addAdmin.pending , (state)=>{
            state.isUserAdded = false;
            state.isLoading = true
        })
        .addCase(addAdmin.fulfilled , (state,action)=>{
            state.isUserAdded = true;
            state.isLoading = false;
            state.error = null
        })
        .addCase(addAdmin.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(updateUser.pending , (state)=>{
            state.isUserAdded = false;
            state.isLoading = true
        })
        .addCase(updateUser.fulfilled , (state,action)=>{
            state.isUserAdded = true;
            state.isLoading = false;
            state.error = null
        })
        .addCase(updateUser.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(getAllUser.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(getAllUser.fulfilled , (state,action)=>{
            state.isLoading = false,
            state.users = action.payload,
            state.error = null
        })
        .addCase(getAllUser.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
    }
});

export const {  }  = userSlice.actions;



export default userSlice.reducer;