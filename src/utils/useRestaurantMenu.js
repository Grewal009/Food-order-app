
import { useState, useEffect } from "react";


const useRestaurantMenu = (id) => {

    const [restaurant, setRestaurant] = useState(null);

    useEffect(
        ()=>{
            getRestaurantData();
        }
        ,[]
    );

    async function getRestaurantData(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+ id);
        const json =  await data.json();
        console.log(json);
        setRestaurant(json.data); 
    }

    return restaurant;
  
}

export default useRestaurantMenu