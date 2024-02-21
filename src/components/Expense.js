import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../Store/ExpenseReducer';
const Expense = (props) => {
    const dispatch=useDispatch()
    const expenses=useSelector((state)=>{
        return state.expense.items
    })
    const {category,description,expense,id}=props.item
    const editExpense=()=>{
        props.show()
        props.id(id)
        props.expense(expense)
        props.description(description)
        props.category(category)
    }
    const deleteExpense=async()=>{
        const res=await fetch(`https://contact-7d1c8-default-rtdb.firebaseio.com/expenses/${id}.json`,
        {method:'DELETE'})
        
        if(!res.ok){
            console.log('error',res)
        }else{
            dispatch(expenseActions.deleteExpense(id))
            console.log('Expense successfully deleted',res)
        }
    }
  return (
    <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-2 rounded">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{category}</div>
          {description}
        </div>
        <Badge bg="primary" pill>
          $ {expense}
        </Badge>
        <Button variant='primary' onClick={editExpense}>Edit expense</Button>
        <Button variant='primary' onClick={deleteExpense}>Delete expense</Button>
      </ListGroup.Item>
  )
}

export default Expense