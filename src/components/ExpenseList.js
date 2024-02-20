import React, { useContext, useEffect } from 'react'
import Expense from './Expense'
import ListGroup from 'react-bootstrap/ListGroup';
import { ExpenseContext } from '../Store/ExpenseContext';
import { useGetFetch } from '../custom-hooks/useFetch';
const ExpenseList = (props) => {
    const expenseCtx=useContext(ExpenseContext)
    const {data}=useGetFetch('https://contact-7d1c8-default-rtdb.firebaseio.com/expenses.json')
    useEffect(()=>{
        const arr=Object.keys(data)
        if(arr.length>0 && expenseCtx.items.length===0){
            arr.forEach((key)=>{
                expenseCtx.addExpense({...data[key], id:key})
            })
        }
    },[data])

  return (
    expenseCtx.items.length>0 && <ListGroup className='w-50 bg-primary-subtle px-2 pt-2 rounded shadow my-4 mx-auto'>
        {expenseCtx.items.length>0 && expenseCtx.items.map((item)=>{
            return <Expense key={item.id} item={item} expense={props.expense} description={props.description} category={props.category} show={props.show} id={props.id} ></Expense>
        })}
    </ListGroup>
  )
}

export default ExpenseList