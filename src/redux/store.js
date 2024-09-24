import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/products.reducer";
import cartReducer from "./reducer/cart.reducer";

export default configureStore(
    {
        //root reducer
        reducer: {
            products: productsReducer,
            cart: cartReducer
        }
    }
)