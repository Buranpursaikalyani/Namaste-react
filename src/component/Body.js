import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{

   const [listOfRestaurants,setListOfRestaurants]=useState([]);
   const [filteredRestaurant,setFilteredRestaurant]=useState([]);
   const [searchText,setSearchText]=useState("");
  
   useEffect(()=>{
    fetchData();
   },[]);
   
   
   const fetchData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // convert data to json
    const json= await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
   };

   // Conditional Rendering
   //if(listOfRestaurants.length==0){
   /// return <Shimmer/>;
   const onlineStatus=useOnlineStatus();
   
    if(onlineStatus===false)
      return (
      <h1>Oops Something Went Wrong Please check your Internet Connection!!</h1>
      );
      //console.log("length is"+ listOfRestaurants.length);
  
      return listOfRestaurants.length==0?(
      <Shimmer/>):(
     <div className="body">
       <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input type="text" 
          data-testid="searchInput"className="border border-solid border-black " 
          value={searchText}
          onChange={(e)=>
          setSearchText(e.target.value)
          }
          />
          <button className="px-2 py-1 bg-green-300 m-2 rounded-lg justify-start "
           onClick={()=>
           {
           const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
           setFilteredRestaurant(filteredRestaurant)
          }}
           >
            search</button>
        </div>
       <div className="search m-4 p-4 flex items-center ">
       <button className="px-1 py-2 bg-gray-100 rounded-lg" 
         onClick={()=> {
            const filteredData=listOfRestaurants.filter((res) => res.info.avgRating > 4.0);
            setFilteredRestaurant(filteredData);
            //console.log(filteredData)
          }}
          >
            Top Rated Restaurants
       </button>
       </div>
       </div>
           <div className="restro-container grid auto-rows-fr grid-cols-5 gap-y-0.5 gap-x-1 space-y-1.5 > * + * flex-wrap">
            {filteredRestaurant.map((restaurant) =>  (
              <Link key={restaurant.info.id} to={"restaurants/"+restaurant?.info.id}><RestaurantCard resData={restaurant}/></Link>
            ))}
          </div>
          </div>

    );
  };
  export default Body;