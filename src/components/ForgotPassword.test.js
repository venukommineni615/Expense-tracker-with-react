import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

test('render login button',()=>{
    render(<MemoryRouter><ForgotPassword></ForgotPassword></MemoryRouter>)
    const element=screen.getByText('Reset Password',{ selector: 'button' })
    expect(element).toBeInTheDocument()
})
test('render label',()=>{
    render(<MemoryRouter><ForgotPassword></ForgotPassword></MemoryRouter>)
    const element=screen.getByText('Email address',{ selector: 'label' })
    expect(element).toBeInTheDocument()
})
test('render input of type email',()=>{
    render(<MemoryRouter><ForgotPassword></ForgotPassword></MemoryRouter>)
    const element=screen.getByRole('textbox',{ type: 'email' })
    expect(element).toBeInTheDocument()
})