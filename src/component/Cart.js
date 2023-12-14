import { useDispatch, useSelector } from "react-redux"
import ItemMenu from "./ItemMenu"
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store) => store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    //useSelector((store)=> store.cart.items)
    return(
        <div className="text-center"><h1> Cart </h1>
            <button className="p-2 m-2 text-sm bg-black text-white rounded-lg"
            
            onClick={handleClearCart}>Clear Cart</button>
            
            <div className="w-6/12 m-auto">
            {cartItems?.length===0 && (<h1>Cart is Empty please Add some Items</h1>)}
                <ItemMenu items={cartItems}/></div>
               
        </div>
    )
   
    
}
export default Cart;