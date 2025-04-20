import { configureStore } from "@reduxjs/toolkit";
import fruits from "./features/fruitsSlice";

const store = configureStore({
    reducer:{
        fruits
    }
})

export default store
