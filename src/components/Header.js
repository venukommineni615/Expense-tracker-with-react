import React, { useState, useRef } from "react";
import { Navbar, NavbarBrand, Form, Button } from "react-bootstrap";
import {  Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../Store/ThemeReducer";

const Header = () => {
    const anchor=useRef()
    const [show,setShow]=useState(false)
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const totalExpense = useSelector((state) => {
    return state.expense.totalExpense;
  });
  const expenses = useSelector((state) => {
    return state.expense.items;
  });
  const download=()=>{
    function convertToCSV(data) {
        const header = Object.keys(data[0]).join(',') + '\n';
        const body = data.map(item => Object.values(item).join(',')).join('\n');
        return header + body;
    }
    console.log(expenses[0])
    const data=convertToCSV(expenses)
    const blob = new Blob([data], { type: 'text/csv' });
   
        const url = window.URL.createObjectURL(blob);
        
        anchor.current.href = url;
       
  }
  const theme = useSelector((state) => {
    return state.theme.theme;
  });
  const color = useSelector((state) => {
    return state.theme.color;
  });
  const activatePremium=()=>{
    setShow(true)
  }
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const toggle=()=>{
    dispatch(themeActions.toggle())
  }
  return (
    <>
      <Navbar className={`shadow bg-${theme} d-flex justify-content-between p-2`}>
        <div className="d-flex justify-content-between align-items-center w-25">
            <NavbarBrand className={`text-${color} fs-3 fw-bold mx-4 `}>Expense Tracker</NavbarBrand>
        {show && <Form.Check 
        type="switch"
        id="custom-switch"
      
        className={`d-inline-flex text-${color} fs-4 p-0 text-center `}
        onClick={toggle}
      />}
        </div>
        <div>
            {show && <a ref={anchor} onClick={download} download={'expenses.csv'} className={`bg-primary-subtle text-decoration-none mx-4 border border-1 border-white rounded p-2`}>Download expenses</a>}
          {totalExpense >= 10000 && !show &&
            <Button className="ms-auto" onClick={activatePremium}>Activate Premium</Button>
          }
          
          <Button
            
            onClick={logout}
            className="mx-3  h-25 bg-primary-subtle border-white text-primary "
          >
            Log out
          </Button>
        </div>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
