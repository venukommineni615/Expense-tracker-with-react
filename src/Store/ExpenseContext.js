import { createContext } from "react";

export const ExpenseContext=createContext({
    items:[],
    addItem:(item)=>{}
})
