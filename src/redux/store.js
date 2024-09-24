import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/products.reducer";

export default configureStore(
    {
        //root reducer
        reducer :{
            products : productsReducer
        }
    }
)