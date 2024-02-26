import { createSlice } from "@reduxjs/toolkit";
const themeSlice=createSlice({
    name:'theme',
    initialState:{theme:'light',color:'dark'},
    reducers:{

        toggle(state){
            state.theme=state.theme==='light'?'dark':'light'
            state.color=state.color==='dark'?'light':'dark'

        }
       
    }
})

export const themeActions=themeSlice.actions
export default themeSlice.reducer