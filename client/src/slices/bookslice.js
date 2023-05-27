import {createSlice} from '@reduxjs/toolkit'  
const initialState ={isBookClicked:false,isBooked:false}
const bookSlice =createSlice({
name:'book',
initialState : initialState,
reducers:{
setBookClicked:(state,action)=>{state.isBookClicked=true},
setBooked:(state,action)=>{state.isBooked=true}
}

})

export const {setBookClicked,setBooked}=bookSlice.actions
export default bookSlice.reducer;