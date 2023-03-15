import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import store from "../utils/store";
import FoodItem from "./FoodItem";


const Cart = () => {

    const cartItems = useSelector(store=>store.cart.items);

    const dispatch = useDispatch();

    const HandleClearCart = () =>{
        dispatch(clearCart());
    }

    return(
        <div className="bg-yellow-200 p-2">
            <div className="flex">
                <h1>Cart:</h1>
                <button className="bg-green-400 px-2 mx-2 rounded-md" onClick={()=>HandleClearCart()}>clear cart</button>

            </div>
           
        <div className="p-5 bg-yellow-200 min-h-screen px-5 flex flex-wrap justify-center">
           
                {
                    cartItems.map(item=><FoodItem key={item.id} {...item}/>)
                }

            
        </div>
        </div>
    );
}

export default Cart;