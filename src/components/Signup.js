import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './Signup.module.css'
const Signup = () => {
  return (
    <Form className={`w-50 mx-auto ${styles.verticallyCenter}`}>
     
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
     
      <Button variant="primary" type="submit">
        sign up
      </Button>
    </Form>
  );
};

export default Signup;
