import {createSlice} from '@reduxjs/toolkit'  
const authInitialState ={isAuthenticated:false}
const authSlice =createSlice({
name:'auth',
initialState : authInitialState,
reducers:{
setUserAuth:(state,action)=>{state.isAuthenticated=action.payload},
}

})

export const {setUserAuth}=authSlice.actions
export default authSlice.reducer;


