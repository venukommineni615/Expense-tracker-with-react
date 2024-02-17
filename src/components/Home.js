import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
                <div className='p-3 fst-italic'>welcome to expense tracker!!!</div>
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
    </>
  )
}

export default Home