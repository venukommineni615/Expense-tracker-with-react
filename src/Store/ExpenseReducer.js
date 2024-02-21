import { createSlice } from "@reduxjs/toolkit";
const initialState={items:[]}
const expenseSlice=createSlice({
    name:'expense',
    initialState,
    reducers:{
        addExpense(state,action){
            state.items=[...state.items,action.payload]
        },
        deleteExpense(state,action){
            state.items=state.items.filter((item)=>{
                return item.id!==action.payload
        })},
        updateExpense(state,action){
            const updatedIndex=state.items.findIndex((item)=>{
                return item.id===action.payload.id
            })
            state.items[updatedIndex]={...action.payload.item,id:action.payload.id}
        }
    }
})
export const expenseActions=expenseSlice.actions
export default expenseSlice.reducer