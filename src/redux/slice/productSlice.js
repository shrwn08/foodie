import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchProducts = createAsyncThunk('fetchProducts', async()=>{
    const response = await axios.get("http://localhost:3000/auth/products")
        return  response.data.products
});

export const uploadProducts = createAsyncThunk('uploadProducts', async(productData)=>{
    const response = await axios.post("http://localhost:3000/auth/upload-product", productData,{
        headers: { "Content-Type": "multipart/form-data" }});
    return  response.data
});


export const fetchCategoryProducts = createAsyncThunk('fetchCategoryProducts', async(category)=>{
    const response = await axios.get(`http://localhost:3000/auth/products?category=${category}`)
        return  response.data
});





 const productSlice = createSlice({
    name : "products",
    initialState :{
        data : [],
        categories : {
            breakfast : [],
            lunch : [],
            dinner : [],
            snacks : [],
            dessert : []
        },
        isError : false,
        isLoading : {
            all : false,
            breakfast : false,
            lunch : false,
            dinner : false,
            snacks : false,
            dessert : false
        },
    },
    extraReducers : (builder) => {

        //fetching all products
        builder.addCase(fetchProducts.pending, (state)=>{
            state.isLoading.all = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading.all = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.isError = true;
            console.error('Erorr', action.payload);
        })

        //uploading products

        builder.addCase(uploadProducts.pending, (state,)=>{
            state.isLoading.all = true;
        });
        builder.addCase(uploadProducts.fulfilled, (state, action)=>{
            state.isLoading.all = false;
            state.data.push(action.payload)
        });
        builder.addCase(uploadProducts.rejected, (state, action)=>{
            state.isError = true;
            state.isLoading.all = false
            console.error('Error', action.payload)
        })


        //fetch category product
        builder.addCase(fetchCategoryProducts.pending, (state, action)=>{
            const category = action.meta.arg;
            state.isLoading[category]=true;
        });
        builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
            state.isLoading[action.meta.arg] = false; 
            state.categories[action.meta.arg] = action.payload.products;
        });
        builder.addCase(fetchCategoryProducts.rejected, (state, action)=>{
            state.isError = true;
            if(action.meta.arg){
            state.isLoading[action.meta.arg] =false}
            console.error('Erorr', action.payload);
        })


    }
    
})

export default productSlice.reducer;
