
import RestaurantCard from "./RestaurantCard";
import { RESTRO_DATA } from "../utils/Constants";
import { useState } from "react";

const Body = () => {
  const restro = RESTRO_DATA;

  const [searchText, setSearchText] = useState("");
  
  return (
    <div>
        <div className="bg-yellow-200 p-5 flex justify-center items-center ">
          <input className="border-2 border-gray-300 rounded-md px-2 active:border-blue-500
          focus:ring-4  " type="text" value={searchText} placeholder="Search..."
          onChange={(e)=>setSearchText(e.target.value)} />
          <button className="mx-2 border-2 px-3 py-1 bg-indigo-500 hover:bg-indigo-800 rounded-md font-bold text-white">Search</button>
        </div>

      <div className="bg-yellow-200 min-h-screen px-5 flex flex-wrap justify-center">

        {restro.map(
          (rest)=><RestaurantCard restaurant={rest} />
        )}
      
      </div>

    </div>
    
  )
}

export default Body;