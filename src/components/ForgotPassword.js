import React, { useRef,useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ForgotSVG from "../forgot_password.svg";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
const ForgotPassword = () => {
    const [loading,setLoading]=useState(false)
  const email = useRef("");
  const resetPassword = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBIXYEexOHeexcl7872yMM70nR1j7HYnhM",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: email.current.value,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(res.error.message);
      } else {
        console.log("res email", data.email);
      }
    } catch (error) {
      alert(error);
    }
    setLoading(false)
  };

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <CardGroup className="m-4 shadow w-75 mx-auto ">
        <Card>
          <Card.Img variant="top" src={ForgotSVG} />
        </Card>
        <Card className="bg-dark">
          <Card.Body className="d-flex justify-content-center align-items-center">
            {!loading && <Form onSubmit={resetPassword}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  ref={email}
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Button type="submit" variant="secondary">Reset Password</Button>
            </Form>}
            {loading && <Spinner animation="border" role="status" variant="light">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ForgotPassword;
