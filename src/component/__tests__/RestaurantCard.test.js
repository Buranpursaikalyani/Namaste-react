import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mock/restaurantCardData.json"
import "@testing-library/jest-dom"

it("Should Render the RestauarantCard Component to check the card data",()=>{
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    )
    const resCard=screen.getByText("Imperial Multi-Cusine Restaurant");
    expect(resCard).toBeInTheDocument();
})