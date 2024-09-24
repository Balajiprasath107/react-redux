import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice(
    {
        name: "cart",
        initialState: {
            cartCount: 0,
            cartContains: [],
            TotalCartPrice: 0
        },
        reducers: {
            addItems: (state, action) => {
                state.cartContains = [...state.cartContains, action.payload]
                state.TotalCartPrice = Math.round((state.TotalCartPrice * 100) + ((action.payload.price * 100) * action.payload.quantity)) / 100
                state.cartCount += 1
            },
            removeitem: (state, action) => {
                state.TotalCartPrice = Math.round((state.TotalCartPrice * 100) - ((action.payload.price * 100) * action.payload.quantity)) / 100
                state.cartContains = state.cartContains.filter((item) => item.id !== action.payload.id)
                state.cartCount -= 1
            },
            newtotal: (state, action) => {
                state.TotalCartPrice = action.payload
            },
            newcartCount: (state, action) => {
                state.cartCount = action.payload
            },
            cartremove: (state, action) => {
                state.cartContains = state.cartContains.filter((item) => item.id !== action.payload.id)
            }
        }
    }
)
export const { addItems, removeitem, newtotal, newcartCount, cartremove } = cartslice.actions

export default cartslice.reducer;