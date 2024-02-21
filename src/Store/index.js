import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import ExpenseReducer from "./ExpenseReducer";
const store=configureStore({reducer:{
    Auth:AuthReducer,
    expense:ExpenseReducer
}})
export default store