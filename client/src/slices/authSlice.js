import {createSlice} from '@reduxjs/toolkit'  
const authInitialState ={isAuthenticated:false , userType:undefined}
const authSlice =createSlice({
name:'auth',
initialState : authInitialState,
reducers:{

setUserAuth:(state,action)=>{state.isAuthenticated=action.payload},
setUserType:(state,action)=>{state.userType=action.payload}


}

})

export const {setUserAuth,setUserType}=authSlice.actions
export default authSlice.reducer;


