import { useState } from "react";
import ItemMenu from "./ItemMenu";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    const handleClick=()=>{
       setShowIndex();
    }
    
    return (
        <div>
            {/* Header*/}
            <div className="font-bold text-sm w-6/12 mx-auto my-4 bg-green-60 shadow-lg p-4">
             <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
            <span >{data.title}({data.itemCards.length})</span>
            <span>🔽</span></div>
            
            {/* body */}
            {showItems &&< ItemMenu items={data.itemCards}/>}
            </div>  
        </div>
    )
}
export default RestaurantCategory;