import React, { useState } from 'react'
import { ExpenseContext } from './ExpenseContext'
const ExpenseProvider = (props) => {
    const [items,setItems]=useState([])
    const addExpense=(item)=>{
        setItems((prev)=>{
            return [...prev,item]
        })
    }
  return (
    <ExpenseContext.Provider value={{
        items:items,
        addExpense:addExpense
    }}>{props.children}</ExpenseContext.Provider>
  )
}

export default ExpenseProvider