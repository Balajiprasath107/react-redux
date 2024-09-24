import { createSlice } from "@reduxjs/toolkit";

//create slice
export const productSlice =  createSlice(
    {
        name : 'products',
        initialState : {
            isLoading : false,
            products : []
        },
        reducers : {
            saveLAllProducts : (state,action) => {
                console.log(state,action);
                
            }
        }
    }
)

export const {saveLAllProducts} = productSlice.actions;

export default productSlice.reducer;