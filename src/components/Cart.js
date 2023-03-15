import { useSelector } from "react-redux";
import store from "../utils/store";
import FoodItem from "./FoodItem";


const Cart = () => {

    const cartItems = useSelector(store=>store.cart.items);

    return(
        <div className="p-5 bg-yellow-200 min-h-screen px-5 flex flex-wrap justify-center">
           
                {
                    cartItems.map(item=><FoodItem key={item.id} {...item}/>)
                }

            
            
        </div>
    );
}

export default Cart;