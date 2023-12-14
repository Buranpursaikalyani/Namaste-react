import { act } from 'react-dom/test-utils'
import resMenuData from '../mock/resMenuList.json'
import RestaurantMenu from '../RestaurantMenu'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import cartStore from '../../utils/cartStore';
import '@testing-library/jest-dom';
import Header from '../Header';
import Cart from '../cart';
global.fetch=jest.fn(()=>
    Promise.resolve({
        json:()=>Promise.resolve(resMenuData)
})
);
it("Should load Restaurant Menu Component",async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Provider store={cartStore}>
        <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
    )
    )
    const accordianHeader=screen.getByText("Lunch Box(4)")
    expect(accordianHeader).toBeInTheDocument()
})
it("Should find how many items are present in lunchbox accordian header",async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Provider store={cartStore}>
        <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
    )
    )
    const accordianHeader=screen.getByText("Lunch Box(4)")
    fireEvent.click(accordianHeader)
    const biryaniAccordianItems=screen.getAllByTestId("foodItems")
    expect(biryaniAccordianItems.length).toBe(4)
})
it("Should find add button and click on 1st add button lunchbox accordian header",async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Provider store={cartStore}>
        <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
    )
    )
    const accordianHeader=screen.getByText("Lunch Box(4)")
    fireEvent.click(accordianHeader)
    const biryaniAccordianItems=screen.getAllByTestId("foodItems")
    expect(biryaniAccordianItems.length).toBe(4)
    const addBtns=screen.getAllByRole("button",{name:"ADD +"})
    fireEvent.click(addBtns[0]);
})
it("Should check on header one cart item is added or not",async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Provider store={cartStore}>
        <RestaurantMenu/>
        <Header/>
        <Cart/>
        </Provider>
        </BrowserRouter>
    )
    )
    const accordianHeader=screen.getByText("Lunch Box(4)")
    fireEvent.click(accordianHeader)
    const biryaniAccordianItems=screen.getAllByTestId("foodItems")
    const addBtns=screen.getAllByRole("button",{name:"ADD +"})
    fireEvent.click(addBtns[1]);
    //expect(screen.getByText("Cart (3 items)")).toBeInTheDocument()
    expect(screen.getAllByTestId("foodItems").length).toBe(6)
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(4)
    expect(screen.getByText("Cart is Empty please Add some Items")).toBeInTheDocument();
})
