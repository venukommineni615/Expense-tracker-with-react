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
        console.log(password.current.value, confirmPassword.current.value)
        if(password.current.value===confirmPassword.current.value){
          try{ const res=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBIXYEexOHeexcl7872yMM70nR1j7HYnhM`, {method:'POST',body:JSON.stringify({email:email.current.value,
        password:password.current.value,returnSecureToken:true}), headers:{'Content-Type':'application/json'}})
    
        const data=await res.json()
    if(!res.ok){
        throw new Error(res.error)
    }else{
        email.current.value=''
        password.current.value=''
        confirmPassword.current.value=''
        console.log('You have successfully signed up',data)
    }}catch(error){
            alert(error)
        }
        }
        else{
            alert("Both passwords should be same")
        }
    }
  return (
    <div className={`d-flex flex-column align-items-center justify-content-center ${styles.verticallyCenter}`}>
    <Form className={`w-fit-content p-4 d-flex flex-column mb-4 border border-1 border-dark-subtle rounded align-items-center shadow-sm`} onSubmit={createAccount}>
     
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control ref={email} type="email" placeholder="name@example.com" required/>
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
          <Form.Control ref={password} type="password" placeholder="Password" required />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="confirmfloatingPassword" label="Confirm Password">
          <Form.Control ref={confirmPassword} type="password" placeholder="Password" required/>
        </FloatingLabel>
     
      <Button variant="primary" type="submit" className="w-100 rounded">
        sign up
      </Button>
    </Form>
    <Button className="mx-auto shadow-sm bg-success-subtle border-1 border-success text-dark" >Have an account? Login</Button>
    </div>
  );
};

export default Signup;
