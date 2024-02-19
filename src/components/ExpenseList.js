import React, { useContext } from 'react'
import Expense from './Expense'
import ListGroup from 'react-bootstrap/ListGroup';
import { ExpenseContext } from '../Store/ExpenseContext';
import { useGetFetch } from '../custom-hooks/useFetch';
const ExpenseList = () => {
    const {data}=useGetFetch('https://contact-7d1c8-default-rtdb.firebaseio.com/expenses')
    console.log('data',data)
    const expenseCtx=useContext(ExpenseContext)

  return (
    expenseCtx.items.length>0 && <ListGroup className='w-50 bg-primary-subtle px-2 pt-2 rounded shadow my-4 mx-auto'>
        {expenseCtx.items.map((item)=>{
            return <Expense key={item.description} item={item}></Expense>
        })}
    </ListGroup>
  )
}

export default ExpenseList