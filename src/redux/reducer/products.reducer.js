import { createSlice } from "@reduxjs/toolkit";
import products from '../../product.json'
//create slice
export const productSlice = createSlice(
    {
        name: 'products',
        initialState: {
            isLoading: false,
            products: products,
            incart: Array(products.length).fill(false),
            quantity: Array(products.length).fill(1)
        },
        reducers: {
            saveLAllProducts: (state, action) => {
                console.log(state, action);

            },
            changeincart: (state, action) => {
                state.incart[action.payload - 1] = (!state.incart[action.payload - 1])
            },
            changequantity: (state, action) => {
                state.quantity[action.payload[0] - 1] = action.payload[1]
            }
        }
    }
)
export const { saveLAllProducts, changeincart, changequantity } = productSlice.actions;

export default productSlice.reducer;