import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
name: 'cart',
initialState :[],
reducers:{
    addtocart:(state,data)=>{
    state.push(data.payload)
    },
     deletefromcart:(state,data)=>{
        state.splice(data.payload.index,1)}
}
})

export  const {addtocart,deletefromcart} =CartSlice.actions
export  default CartSlice 
