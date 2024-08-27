import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slice/cartslice";
import productslice from "./slice/productslice";



 export const store=configureStore({
    reducer:{
        Cart:cartslice,
        products:productslice
    },
    devTools: process.env.NODE_ENV !== 'production'
})