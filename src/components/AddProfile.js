import React, { useInsertionEffect, useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast';
import { Link } from "react-router-dom";
const AddProfile = () => {
    const displayName=useRef('')
    const photoUrl=useRef('')
    const updateProfile=async(event)=>{
        event.preventDefault()
        try{const res=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY]`,{
            method:'POST',
            body:JSON.stringify({
                idToken:localStorage.getItem('token'),
                displayName:displayName.current.value,
                photoUrl:photoUrl.current.value,
                deleteAttribute:['deleteProfile'],
                returnSecureToken:true,

            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(!res.ok){
            throw new Error('something is wrong on client side')
        }
        const data=await res.json()
        console.log('data from profile',data)}catch(error){
            console.log('error',error)
        }
    }
  return (
    <>
     <div className='p-3 fst-italic'>random quote</div>
                <ToastContainer
          className="p-3"
          position={'top-end'}
          style={{ zIndex: 1 }}
        >
    <Toast>
            <Toast.Body className='fst-italic'>Your profile is incomplete.<Link className='text-decoration-none' to='/addprofile'>Complete now</Link></Toast.Body>
          </Toast>
        </ToastContainer>
    <hr/>
    <Form className="w-75 mx-auto" onSubmit={updateProfile}>
      <Row className="d-flex justify-content-between mb-4">
        <Col md={4} className="d-inline fs-3 fw-bold ">Contact Details</Col>
        <Col md={2} className="text-end"><Button className="border border-danger rounded bg-white text-danger fw-semibold" >Cancel</Button></Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Control ref={displayName} placeholder="Full name" />
        </Col>
        <Col>
          <Form.Control ref={photoUrl} placeholder=" Profile Photo URL" type="url"/>
        </Col>
      </Row>
      <Row className="mb-4" >
       <Col md={2}><Button type="submit" className="border-secondary bg-secondary bg-gradient" >Update</Button></Col> 
      </Row>
    </Form>
    </>
  );
};

export default AddProfile;
