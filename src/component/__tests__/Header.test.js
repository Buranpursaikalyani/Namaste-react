import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import cartStore from "../../utils/cartStore"
import '@testing-library/jest-dom'

it('should load header component with login button',()=>{
    render(
        <BrowserRouter>
        <Provider store={cartStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    //const loginButton=screen.getByRole("button")
    //expect(loginButton).toBeInTheDocument()
    //const loginButton=screen.getByText("Login")
    //expect(loginButton).toBeInTheDocument()
    const loginButton=screen.getByRole("button", {name:"Login"})
    expect(loginButton).toBeInTheDocument()
})
it("should render header component with cart items with 0 items",()=>{
    render(
        <BrowserRouter>
        <Provider store={cartStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )
    const cartItem=screen.getByText("Cart (0 items)")
    expect(cartItem).toBeInTheDocument()

})
it('should load header component with Cart with 0 items',()=>{
    render(
        <BrowserRouter>
        <Provider store={cartStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const cartItem=screen.getByText(/Cart/)
    expect(cartItem).toBeInTheDocument()
})
it('should change Login Button to Logout Button',()=>{
    render(
        <BrowserRouter>
        <Provider store={cartStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginButton=screen.getByRole("button",{name:'Login'})
    fireEvent.click(loginButton)
    const logoutButton=screen.getByRole("button",{name:'Logout'})
    expect(logoutButton).toBeInTheDocument()
    })