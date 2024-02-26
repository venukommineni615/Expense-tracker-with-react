import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "./Signup";

test('render login button',()=>{
    render(<MemoryRouter><Signup></Signup></MemoryRouter>)
    const element=screen.getByText('sign up',{ selector: 'button' })
    expect(element).toBeInTheDocument()
})