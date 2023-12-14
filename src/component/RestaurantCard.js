import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props
    //console.log(resData)
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info
    return(
      <div data-testid="resCard"className="res-card m-4 p-4 w-[250px] rounded-lg hover:bg-gray-300 ">
        <img className="res-logo  w-[200px] h-[200px]  rounded-lg " alt="rest-card"  src={CDN_URL+cloudinaryImageId}/>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")} </h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData?.info.sla.deliveryTime} minutes</h4>
       
  
      </div>
    )
  }
  
  export default RestaurantCard;