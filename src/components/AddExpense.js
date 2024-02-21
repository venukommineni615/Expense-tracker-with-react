import React, {useState } from "react";
import { Button, Form } from "react-bootstrap";
import ExpenseList from "./ExpenseList";
import {postFetch} from "../utils/postFetch";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../Store/ExpenseReducer";
const AddExpense = () => {
    const dispatch=useDispatch()
    const expenses=useSelector((state)=>{
        return state.expense.items
    })
    const [show,setShow]=useState(false)
    const [expense,setExpense]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const [id,setId]=useState(null)
    const changeExpense=(event)=>{
        setExpense(event.target.value)
    }
    const changeDescription=(event)=>{
        setDescription(event.target.value)
    }
    const changeCategory=(event)=>{
        setCategory(event.target.value)
    }
    const addExpense=async(event)=>{
        event.preventDefault()
        if(category.length<=1){
            alert('Select the category')
            return
        }
        const item={
            expense:expense,
            description:description,
            category:category
        }
        let url='https://contact-7d1c8-default-rtdb.firebaseio.com/expenses.json'
        let method="POST"
        const existed=expenses.find((item)=>{
            return item.id===id
        })
        if(existed){
            url=`https://contact-7d1c8-default-rtdb.firebaseio.com/expenses/${id}.json`
            method='PUT'
        }
        const res=await postFetch(url,JSON.stringify(item),method)
        if(id){
            dispatch(expenseActions.updateExpense({id,item}))
        }
        else{
            setId(res.name)
            dispatch(expenseActions.addExpense({...item,id:res.name}))
        }
        setExpense('')
        setDescription('')
        setCategory('')

    }
  return (
    <>
    {show && <Form onSubmit={addExpense} className="w-50 mx-auto bg-primary-subtle mt-5 shadow p-4 rounded">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Expense</Form.Label>
        <Form.Control value={expense} onChange={changeExpense} type="number" placeholder='$' min={10} required/>
        <Form.Text muted>
        The expense should be atleast $10.
      </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe here</Form.Label>
        <Form.Control value={description} onChange={changeDescription} as="textarea" rows={3} required/>
      </Form.Group>
      <Form.Select value={category} onChange={changeCategory} aria-label="Default select example">
        <option value=''>Category</option>
        <option value="petrol">Petrol</option>
        <option value="food">Food</option>
        <option value="rent">Rent</option>
        <option value="other">Other</option>
      </Form.Select>
      <Button variant="primary" className="mt-4" type='submit'>Add expense</Button>
    </Form>}
    {!show && <div className="text-center p-2"><Button onClick={()=>{setShow(true)}} className="bg-primary-subtle p-3 rounded text-dark fw-semibold">Add Expense</Button></div>}
    <ExpenseList expense={(val)=>{setExpense(val)}} description={(val)=>{setDescription(val)}} category={(val)=>{setCategory(val)}} show={()=>{setShow(true)}} id={(val)=>{setId(val)}}></ExpenseList>
    </>
  );
};

export default AddExpense;
