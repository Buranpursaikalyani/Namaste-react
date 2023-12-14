import { useEffect, useState } from "react"
import { menuApi_URL } from "./constants";

const useRestaurantMenu=(resId)=>{
    useEffect(()=>{
        fetchMenu();
    },[])
    const [resInfo,setResInfo]=useState(null);
    const fetchMenu=async()=>{
        const data=await fetch(menuApi_URL+resId);
        const json=await data.json();
        setResInfo(json.data);

       }
    return resInfo

}
export default useRestaurantMenu;