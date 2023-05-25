import { configureStore } from "@reduxjs/toolkit";
import { catsReducer } from "./slices/categoryList";
import { goodsReducer } from "./slices/goods";
import { cartReducer } from "./slices/cart";

export default configureStore({
    reducer: {
        categories: catsReducer,
        goods: goodsReducer,
        cart: cartReducer
    }
})
