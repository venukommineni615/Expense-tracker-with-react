import { createSlice } from "@reduxjs/toolkit";
const initialState={items:[],totalExpense:0}
const expenseSlice=createSlice({
    name:'expense',
    initialState,
    reducers:{
        addExpense(state,action){
            state.items=[...state.items,action.payload]
            state.totalExpense=state.totalExpense+parseInt(action.payload.expense)
        },
        deleteExpense(state,action){
            state.items=state.items.filter((item)=>{
                return item.id!==action.payload.id
        })
            state.totalExpense=state.totalExpense-parseInt(action.payload.expense)
    },
        updateExpense(state,action){
            const updatedIndex=state.items.findIndex((item)=>{
                return item.id===action.payload.id
            })
            const oldValue=state.items[updatedIndex].expense
            state.items[updatedIndex]={...action.payload.item,id:action.payload.id}
            state.totalExpense=state.totalExpense-parseInt(oldValue)+parseInt(action.payload.item.expense)
        }
    }
})
export const expenseActions=expenseSlice.actions
export default expenseSlice.reducer