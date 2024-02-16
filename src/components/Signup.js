import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './Signup.module.css'
const Signup = () => {
    const email=useRef('')
    const password=useRef('')
    const confirmPassword=useRef('')
    const createAccount=async(event)=>{
        event.preventDefault()
        if(password.current.value===confirmPassword.current.value){
            
          try{ const res=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBIXYEexOHeexcl7872yMM70nR1j7HYnhM`, {method:'POST',body:JSON.stringify({email:email.current.value,
        password:password.current.value,returnSecureToken:true}), headers:{'Content-Type':'application/json'}})
    
        const data=await res.json()
    if(!res.ok){
        throw new Error(res.error)
    }}catch(error){
            console.log(error)
        }
        }
        else{
            alert("Both passwords should be same")
        }
    }
  return (
    <Form className={`w-50 mx-auto ${styles.verticallyCenter}`} onSubmit={createAccount}>
     
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" required/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" required />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" required/>
        </FloatingLabel>
     
      <Button variant="primary" type="submit">
        sign up
      </Button>
    </Form>
  );
};

export default Signup;
