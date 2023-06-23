import {createSlice} from '@reduxjs/toolkit'  
const authInitialState ={isAuthenticated:false , isAdminAuthenticated:false,userCatagory:undefined}
const authSlice =createSlice({
name:'auth',
initialState : authInitialState,
reducers:{
setUserAuth:(state,action)=>{state.isAuthenticated=action.payload},
setAdminAuth:(state,action)=>{state.isAdminAuthenticated=action.payload},
setUserCatagory:(state,action)=>{state.userCatagory=action.payload}
}

})

export const {setUserAuth}=authSlice.actions
export default authSlice.reducer;


