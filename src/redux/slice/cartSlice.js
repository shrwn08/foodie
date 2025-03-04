import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cartItems: [],
    quantity : 0,
    totalQuantity : 0,
    totalPrice: 0
};


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state, action)=>{
            const product = action.payload;
            const  existingItem = state.cartItems.find(item=>item._id === product._id);

            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.cartItems.push({...product, quantity:1});
            }

            state.totalQuantity +=1;
            state.totalPrice += product.price;
        },

        removeFromCart : (state, action) => {
            const productId = action.payload;
            const existingItem = state.cartItems.find(item=>item._id === productId)

            if(existingItem){
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;

                state.cartItems = state.cartItems.filter(item=> item._id !== productId)
            }
        },
        clearCart : state => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;