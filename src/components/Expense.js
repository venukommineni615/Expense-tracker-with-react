import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge, Button } from 'react-bootstrap';
import { ExpenseContext } from '../Store/ExpenseContext';
const Expense = (props) => {
    const expenseCtx=useContext(ExpenseContext)
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
            expenseCtx.deleteExpense(id)
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