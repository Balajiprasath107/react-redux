import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice(
    {
        name : "cart",
        initialState : {
            cartCount : 0,
            cartContains : [],
            TotalCartPrice : 0
        },
        reducers : {
            addItems : (state,action) => {
                state.cartContains = [...state.cartContains,action.payload]
                state.TotalCartPrice = Math.round((state.TotalCartPrice*100)+((action.payload.price*100)*action.payload.quantity))/100
                state.cartCount+=1
            },
            removeitem : (state,action) => {
                state.TotalCartPrice = Math.round((state.TotalCartPrice*100)-((action.payload.price*100)*action.payload.quantity))/100
                state.cartContains = state.cartContains.filter((item) => item.id !== action.payload.id)
                state.cartCount-=1
            }
        }
    }
)
export const {addItems,removeitem} = cartslice.actions

export default cartslice.reducer;