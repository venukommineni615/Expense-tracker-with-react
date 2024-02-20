import React, { useState } from 'react'
import { ExpenseContext } from './ExpenseContext'
const ExpenseProvider = (props) => {
    const [items,setItems]=useState([])
    const addExpense=(item)=>{
        setItems((prev)=>{
            return [...prev,item]
        })
    }
    const deleteExpense=(id)=>{
        setItems((prev)=>{
            const updatedItems=prev.filter((item)=>{
                return item.id!==id
            })
            return updatedItems
        })
    }
    const editExpense=(id,item)=>{
        setItems((prev)=>{
            const updatedIndex=prev.findIndex((item)=>{
                return item.id===id
            })
            prev[updatedIndex]={...item,id:id}
            return prev
        })
    }
  return (
    <ExpenseContext.Provider value={{
        items:items,
        addExpense:addExpense,
        deleteExpense:deleteExpense,
        editExpense:editExpense
    }}>{props.children}</ExpenseContext.Provider>
  )
}

export default ExpenseProvider