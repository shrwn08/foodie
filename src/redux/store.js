import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice"
import userReducer from "./slice/userSlice"


export const store = configureStore({
   reducer : {
    products : productsReducer,
    user : userReducer,
   },
});