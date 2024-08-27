import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    products: [],
    status: 'none'
}

const productslice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        // fetchproducts:(state,action)=>{
        //     state.products=action.payload
        // }

    },
    extraReducers: (builder) => {
        builder
        .addCase(getproducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.status = 'none'
        })
        .addCase(getproducts.pending,(state)=>{
            state.status='loading'
        })
        .addCase(getproducts.rejected,(state)=>{
            state.failed='failed'
        })
    }


})

export const { fetchproducts } = productslice.actions
export default productslice.reducer;

export const getproducts = createAsyncThunk('products/get', async () => {
    const result = await axios.get('https://fakestoreapi.com/products')
    const data = result.data
    return data
})

//  export function getproducts(){
//         return async function getproductsThunk(dispatch){
//             const results=await axios.get('https://fakestoreapi.com/products')
//             const data=results.data
//             dispatch( fetchproducts(data))
//         }
//  }