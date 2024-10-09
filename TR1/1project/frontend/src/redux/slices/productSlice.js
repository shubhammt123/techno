import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.post("http://localhost:5000/api/product",data);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.put(`http://localhost:5000/api/product/${data._id}`,data);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
export const updateProductWithImage = createAsyncThunk(
    'product/updateProductWithImage',
    async (data , {rejectWithValue})=>{
        try {
            const response = await axios.put(`http://localhost:5000/api/productWithImage/${data.id}`,data.data);
        return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
export const getAllProduct = createAsyncThunk(
    'product/getAllProduct',
    async (_ , {rejectWithValue})=>{
        try {
            const response = await axios.get("http://localhost:5000/api/product");
            const updateProducts = response.data.data.map((item,i)=>{
                return {...item , id : i+1}
            })
        return updateProducts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


const initialState = {
    isLoading : false,
    error : null,
    products : [],
    isProductAdded : false
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        
    },
    extraReducers :(builder)=>{
        builder
        .addCase(addProduct.pending , (state)=>{
            state.isProductAdded = false;
            state.isLoading = true
        })
        .addCase(addProduct.fulfilled , (state,action)=>{
            state.isProductAdded = true;
            state.isLoading = false;
            state.error = null
        })
        .addCase(addProduct.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(updateProduct.pending , (state)=>{
            state.isProductAdded = false;
            state.isLoading = true
        })
        .addCase(updateProduct.fulfilled , (state,action)=>{
            state.isProductAdded = true;
            state.isLoading = false;
            state.error = null
        })
        .addCase(updateProduct.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(updateProductWithImage.pending , (state)=>{
            state.isProductAdded = false;
            state.isLoading = true
        })
        .addCase(updateProductWithImage.fulfilled , (state,action)=>{
            state.isProductAdded = true;
            state.isLoading = false;
            state.error = null
        })
        .addCase(updateProductWithImage.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
        .addCase(getAllProduct.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(getAllProduct.fulfilled , (state,action)=>{
            state.isLoading = false,
            state.products = action.payload,
            state.error = null
        })
        .addCase(getAllProduct.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload?.response?.data
        })
    }
});

export const {  }  = productSlice.actions;



export default productSlice.reducer;