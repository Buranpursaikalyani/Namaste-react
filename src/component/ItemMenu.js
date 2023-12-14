import { useDispatch } from "react-redux/";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemMenu=({items})=>{
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item));
        console.log(item)
    }
return(
    <div>
        {items.map((item)=>(
       <div 
       data-testid="foodItems" 
       key={item?.card?.info?.id}
         className="border-grey-200 border-b-2 text-left flex">

         <div className="w-9/12 py-2">
            <span >{item?.card?.info?.name}</span>
            <div>
            <span>
                ₹ 
                {
                    item?.card?.info?.price ? 
                    item?.card?.info?.price/100:
                    item?.card?.info?.defaultPrice/100  }
                </span>
                </div>
            <p><span className="text-gray-500 text-xs">{item?.card?.info?.description}</span></p>
         </div>
         <div className="w-3/12 p-4">
            
            <button className="inset-x-0 bottom-0 h-10 px bg-white-500 hover:bg-white-400 text-green-400 font-bold py-2 px-4 border-b-4 border-white-700 hover:border-white-500 rounded"
           onClick={()=> handleAddItem(item)}> ADD +</button> 
           <img src={CDN_URL+item?.card?.info?.imageId}></img>
             </div>
         </div>

        ))}
    </div>
       
    );
};
export default ItemMenu;