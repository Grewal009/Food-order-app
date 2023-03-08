
import RestaurantCard from "./RestaurantCard";
import { RESTRO_DATA } from "../utils/Constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterData";

const Body = () => {
  //const restro_List = RESTRO_DATA;

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING");
    //console.log("data ",data);
    const json = await data.json();
    //console.log("json ",json);
    //console.log(json.data.cards[2].data.data.cards);
    setRestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurant(json.data.cards[2].data.data.cards);

  }

 
  
    

  return(
    <div>
        <div className="bg-yellow-200 p-5 flex justify-center items-center ">
          <input className="border-2 border-gray-300 rounded-md px-2 active:border-blue-500
          focus:ring-4  " type="text" value={searchText} placeholder="Search..."
          onChange={(e)=>setSearchText(e.target.value)} />
          <button className="mx-2 border-2 px-3 py-1 bg-indigo-500 hover:bg-indigo-800 rounded-md font-bold text-white" 
          onClick={()=>{
            const data = filterData(searchText, restaurants);
            console.log(data);
            setFilteredRestaurant(data);
            }}>Search</button>
            
        </div>

      <div className="pb-5 bg-yellow-200 min-h-screen px-5 flex flex-wrap justify-center">
      
    
        { (restaurants.length === 0)? <Shimmer />
      : (filteredRestaurant.length === 0)?<h1>No match found.</h1>
      :
         filteredRestaurant.map(
          (rest)=>
          <div className="m-3"><Link to={"/restaurant/" + rest.data.id} >
            <RestaurantCard restaurant={rest} key={rest.data.id}/>
          </Link>
          </div>
          
        )}
      
      </div>

    </div>
    
  )
}

export default Body;