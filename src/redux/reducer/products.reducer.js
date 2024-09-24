import { createSlice } from "@reduxjs/toolkit";
import products from '../../product.json'
//create slice
export const productSlice =  createSlice(
    {
        name : 'products',
        initialState : {
            isLoading : false,
            products : products,
            incart : Array(products.length).fill(false)
        },
        reducers : {
            saveLAllProducts : (state,action) => {
                console.log(state,action);
                
            },
            changeincart : (state,action) => {
                state.incart[action.payload-1] = (!state.incart[action.payload-1])
                console.log(state.incart[action.payload-1],action.payload)
            }
        }
    }
)
export const {saveLAllProducts,changeincart} = productSlice.actions;

export default productSlice.reducer;