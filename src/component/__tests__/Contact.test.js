import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

test('This test should load Contactus component', () => { 
    render(<Contact/>)
const heading=screen.getByRole("heading") 
expect(heading).toBeInTheDocument()
})
test('should test submit is present in contact component', () => { 
    render(<Contact/>)
const button=screen.getByText("Submit") 
expect(button).toBeInTheDocument()
})
test('should test input placeholders are present',()=>{
    render(<Contact/>)
    const inputBoxes=screen.getAllByRole("textbox")
    expect(inputBoxes.length).toBe(2)
})
test('should test placeholder with name is present or not',()=>{
    render(<Contact/>)
    const name=screen.getByPlaceholderText("name")
    expect(name).toBeInTheDocument()
})