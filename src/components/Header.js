import { useState } from "react";
import { Link } from "react-router-dom";




const Header = () => {

  const [isloggedIn, setIsloggedIn] = useState(false);

  return (
    <div className="bg-slate-200 shadow-lg px-5 py-2 flex justify-between">
      <h1 className="font-extrabold flex justify-center items-center">FoodApp</h1>

      <ul className="flex font-bold justify-center items-center ">
        <li className="mx-2 px-4 py-1 rounded-full text-white bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-800 active:ring-1 "><Link to="/" >Home</Link></li>
        <li className="mx-2 px-4 py-1 rounded-full text-white bg-indigo-500 hover:bg-indigo-800 "><Link to="/about" >About</Link></li>
        <li className="mx-2 px-4 py-1 rounded-full text-white bg-indigo-500 hover:bg-indigo-800 "><Link to="/contact">Contact</Link></li>
        <li className="mx-2 px-4 py-1 rounded-full text-white bg-indigo-500 hover:bg-indigo-800 ">Cart</li>
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