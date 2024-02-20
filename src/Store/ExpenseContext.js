import { createContext } from "react";

export const ExpenseContext=createContext({
    items:[],
    addExpense:(item)=>{},
    deleteExpense:(id)=>{},
    editExpense:(id,item)=>{},
})
