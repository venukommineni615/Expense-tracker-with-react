import { screen, render } from "@testing-library/react";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";

test('render login button',()=>{
    render(<MemoryRouter><Login></Login></MemoryRouter>)
    const element=screen.getByText('Login',{ selector: 'button' })
    expect(element).toBeInTheDocument()
})