
import RestaurantCard from "./RestaurantCard";
import { RESTRO_DATA } from "../utils/Constants";
import { useState } from "react";

const Body = () => {
  const restro_List = RESTRO_DATA;

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restro_List);

  function filterData(searchText, restaurants){
   return restaurants.filter((rest)=> rest.data.name.toLowerCase().includes(searchText.toLowerCase()));
    }
  
  return (
    <div>
        <div className="bg-yellow-200 p-5 flex justify-center items-center ">
          <input className="border-2 border-gray-300 rounded-md px-2 active:border-blue-500
          focus:ring-4  " type="text" value={searchText} placeholder="Search..."
          onChange={(e)=>setSearchText(e.target.value)} />
          <button className="mx-2 border-2 px-3 py-1 bg-indigo-500 hover:bg-indigo-800 rounded-md font-bold text-white" 
          onClick={()=>{
            const data = filterData(searchText, restro_List);
            console.log(data);
            setRestaurants(data);
            }}>Search</button>
            
        </div>

      <div className="bg-yellow-200 min-h-screen px-5 flex flex-wrap justify-center">

        { restaurants.map(
          (rest)=><RestaurantCard restaurant={rest} key={rest.data.id}/>
        )}
      
      </div>

    </div>
    
  )
}

export default Body;