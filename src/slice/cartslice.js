import {createSlice} from '@reduxjs/toolkit'



const cartslice=createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addcart:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
          return  state.filter(item=>item.id !==action.payload)
        }
    }

})
export const {addcart,remove}=cartslice.actions
export default cartslice.reducer