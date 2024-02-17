import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
    const navigate=useNavigate()
  const handleClose = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  const sendVerification = async () => {
    if (verified) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBIXYEexOHeexcl7872yMM70nR1j7HYnhM",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: localStorage.getItem("token"),
           
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
          const data = await res.json();
        throw new Error(data.error.message);
      } else {
        const data = await res.json();
        setVerified(true);
      }
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };
  return (
    <>
    <div className="d-flex w-75 p-1">
      <div className="d-inline-flex p-3 fst-italic">welcome to expense tracker!!!</div>
      <Button variant="secondary" onClick={logout} className="ms-auto h-25 mt-3 me-5">Log out</Button>
    </div>
      <ToastContainer
        className="p-3"
        position={"top-end"}
        style={{ zIndex: 1 }}
      >
        <Toast>
          <Toast.Body className="fst-italic">
            Your profile is incomplete.
            <Link className="text-decoration-none" to="/addprofile">
              Complete now
            </Link>
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <hr />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Verify Your Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!loading && (
            <Button variant="secondary" onClick={sendVerification}>
              {!verified ? "Send verification link" : "Done"}
            </Button>
          )}
          {loading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
