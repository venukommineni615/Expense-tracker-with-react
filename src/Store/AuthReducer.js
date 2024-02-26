import { createSlice } from "@reduxjs/toolkit";


const initialState={isAuthenticated:localStorage.getItem('token')?true:false, token:localStorage.getItem('token')?localStorage.getItem('token'):null}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state){
            state.isAuthenticated=true
            state.token=localStorage.getItem('token')
        },
        logout(state){
            state.isAuthenticated=false
            state.token=null
        }
    }
})
export const authActions=authSlice.actions
export default authSlice.reducer