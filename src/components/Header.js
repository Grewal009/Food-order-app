import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";




const Header = () => {

  const [isloggedIn, setIsloggedIn] = useState(false);
  const activeLink = "text-slate-200 bg-slate-900 border-4 border-slate-800 mx-2 px-4 py-1 rounded-full font-extrabold text-xl ";
  const normalLink = "mx-2 px-4 py-1 rounded-full font-extrabold text-xl text-slate-500 border-4 border-slate-500";

  const cartItems = useSelector(store=>store.cart.items);
  console.log(cartItems);

  return (
    <div className="bg-slate-200 shadow-lg px-5 py-2 flex justify-between">
      <h1 className="font-extrabold flex justify-center items-center">FoodApp</h1>

      <ul className="flex font-bold justify-center items-center ">
      <NavLink to="/" className={({isActive})=>isActive?activeLink:normalLink} ><li className="">Home</li></NavLink>
        <li className=""><NavLink to="/about" className={({isActive})=>isActive?activeLink:normalLink} >About</NavLink></li>
        <li className=""><NavLink to="/contact" className={({isActive})=>isActive?activeLink:normalLink} >Contact</NavLink></li>
        <li className=""><NavLink to="/cart" className={({isActive})=>isActive?activeLink:normalLink} >Cart {cartItems.length==0?"":<span className="text-green-600 text-xl">{cartItems.length}</span>}</NavLink></li>  
      </ul>
      
      <div>
        {
          isloggedIn?
          <button onClick={()=> setIsloggedIn(false)} className="w-24 mx-2 px-4 py-2 bg-orange-400 rounded-md  text-slate-50 font-bold hover:bg-orange-600">Logout</button>
          :
          <button onClick={()=> setIsloggedIn(true)} className="w-24 mx-2 px-4 py-2 bg-orange-400 rounded-md  text-slate-50 font-bold hover:bg-orange-600">Login</button>
        }
      
      
      </div>

    </div>
  )
}

export default Header;