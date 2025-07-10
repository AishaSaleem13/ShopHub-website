 import { configureStore } from "@reduxjs/toolkit";
 import CartSlice from "./cart";
 export default  configureStore({
 reducer:{
    ReducerOne:CartSlice.reducer
 }
  })