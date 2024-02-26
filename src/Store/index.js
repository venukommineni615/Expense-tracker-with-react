import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import ExpenseReducer from "./ExpenseReducer";
import ThemeReducer from "./ThemeReducer";
const store=configureStore({reducer:{
    Auth:AuthReducer,
    expense:ExpenseReducer,
    theme:ThemeReducer
}})
export default store