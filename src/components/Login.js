import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const createAccount = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIXYEexOHeexcl7872yMM70nR1j7HYnhM`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(res.error);
      } else {
        email.current.value=''
        password.current.value=''
        console.log("You have successfully logged in", data);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${styles.verticallyCenter}`}
    >
      <Form
        className={`w-fit-content p-4 d-flex flex-column mb-4 border border-1 border-dark-subtle rounded align-items-center shadow-sm`}
        onSubmit={createAccount}
      >
        <h4 className="mb-3">Login</h4>
        <Form.Group className="mb-3 w-100">

          <Form.Control
            type="email"
            placeholder="name@example.com"
            required
            ref={email}
          />
        </Form.Group>
      
        <InputGroup className="mb-3">
          <FormControl
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            ref={password}
          />
          <Button
            variant="outline-secondary"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </Button>
        </InputGroup>

        <Button variant="primary" type="submit" className="w-100 rounded">
          Login
        </Button>
        {/* <Link to='/forgot-password'>Forgot Password?</Link> */}
      </Form>
      <Button className="mx-auto shadow-sm bg-success-subtle border-1 border-success text-dark">
        Don't have an account? Sign up
      </Button>
    </div>
  );
};

export default Login;
