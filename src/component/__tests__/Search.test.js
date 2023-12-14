import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mock/MockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("Should Render Body Component and check search button is in the page",async()=>{
   
    await act(async()=>
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
)
const searchbtn=screen.getByRole("button" ,{name:"search"})
expect(searchbtn).toBeInTheDocument();
    })
it("Should search resList fot 'the' text input  ",async()=>{
   
    await act(async()=>
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
)
const searchInput=screen.getByTestId("searchInput")
const searchbtn=screen.getByRole("button" ,{name:"search"})
const cardsBeforeSearch=screen.getAllByTestId("resCard")
expect(cardsBeforeSearch.length).toBe(20);
fireEvent.change(searchInput,{target:{value:"the"}})
fireEvent.click(searchbtn)
const cardsAfterSearch=screen.getAllByTestId("resCard")
expect(cardsAfterSearch.length).toBe(3)
})
it("Should filter top rated restaurants ",async()=>{
   
    await act(async()=>
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
)
const cardsBeforeFilter=screen.getAllByTestId("resCard")
expect(cardsBeforeFilter.length).toBe(20);
//console.log(cardsBeforeFilter.length)

const topRatedbtn=screen.getByRole("button" ,{name:"Top Rated Restaurants"})
fireEvent.click(topRatedbtn)
const cardsAfterFilter=screen.getAllByTestId("resCard")
//console.log(cardsAfterFilter.length)
expect(cardsAfterFilter.length).toBe(14)

})