import React, {  useEffect } from 'react'
import Expense from './Expense'
import ListGroup from 'react-bootstrap/ListGroup';
import { useGetFetch } from '../custom-hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../Store/ExpenseReducer';
const ExpenseList = (props) => {
    const dispatch=useDispatch()
    const expenses=useSelector((state)=>{
        return state.expense.items
    })
    const totalExpense=useSelector((state)=>{
        return state.expense.totalExpense
    })
    const {data}=useGetFetch('https://contact-7d1c8-default-rtdb.firebaseio.com/expenses.json')
    useEffect(()=>{
        const arr=Object.keys(data)
        if(arr.length>0 && expenses.length===0){
            arr.forEach((key)=>{
                dispatch(expenseActions.addExpense({...data[key], id:key}))
            })
        }
    },[data,expenses.length,dispatch])

  return (<>
    <div className='d-flex justify-content-center mx-5 my-4'>
        <p className='fw-semibold fs-6 mx-4'>Total Expenses</p>
        
        <p className='fw-bold fs-5 text-primary mx-4'>$ {totalExpense}</p>
    </div>
    {expenses.length>0 && <ListGroup className='w-50 bg-primary-subtle px-2 pt-2 rounded shadow my-4 mx-auto'>
        {expenses.length>0 && expenses.map((item)=>{
            return <Expense key={item.id} item={item} expense={props.expense} description={props.description} category={props.category} show={props.show} id={props.id} ></Expense>
        })}
    </ListGroup>}
  </>
  )
}

export default ExpenseList