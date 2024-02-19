import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ExpenseContext } from "../Store/ExpenseContext";
import ExpenseList from "./ExpenseList";
import {postFetch} from "../utils/postFetch";

const AddExpense = () => {
    const [show,setShow]=useState(false)
    const expenseCtx=useContext(ExpenseContext)
    const expense=useRef('')
    const description=useRef('')
    const category=useRef('')
    const addExpense=(event)=>{
        event.preventDefault()
        console.log(category.current.value,category.current.value.length)
        if(category.current.value.length<=1){
            alert('Select the category')
            return
        }
        const item={
            expense:expense.current.value,
            description:description.current.value,
            category:category.current.value
        }
        console.log(item)
        postFetch('https://contact-7d1c8-default-rtdb.firebaseio.com/expenses',JSON.stringify(item))
        expenseCtx.addExpense(item)
        expense.current.value=''
        description.current.value=''
        category.current.value=''

    }
  return (
    <>
    {show && <Form onSubmit={addExpense} className="w-50 mx-auto bg-primary-subtle mt-5 shadow p-4 rounded">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Expense</Form.Label>
        <Form.Control ref={expense} type="number" placeholder='$' min={10} required/>
        <Form.Text muted>
        The expense should be atleast $10.
      </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe here</Form.Label>
        <Form.Control ref={description} as="textarea" rows={3} required/>
      </Form.Group>
      <Form.Select ref={category} aria-label="Default select example">
        <option value=''>Category</option>
        <option value="petrol">Petrol</option>
        <option value="food">Food</option>
        <option value="rent">Rent</option>
        <option value="other">Other</option>
      </Form.Select>
      <Button variant="primary" className="mt-4" type='submit'>Add expense</Button>
    </Form>}
    {!show && <div className="text-center p-2"><Button onClick={()=>{setShow(true)}} className="bg-primary-subtle p-3 rounded text-dark fw-semibold">Add Expense</Button></div>}
    <ExpenseList></ExpenseList>
    </>
  );
};

export default AddExpense;
