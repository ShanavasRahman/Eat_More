import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Store/Slices/cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer, 
    },
});

export default appStore;
