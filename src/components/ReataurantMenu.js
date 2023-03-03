import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN } from "../utils/Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
    //console.log(params);

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
   
    if(!restaurant){
        return <div className="flex flex-wrap justify-center"><Shimmer /></div>;
    }

    return(
        <div className="flex">
            <div>
                <h1 className="font-bold">restaurant id : {id}</h1>
                <h2 className="font-extrabold">{restaurant.name}</h2>
                <img alt="" src={IMAGE_CDN + restaurant.cloudinaryImageId}/>
            </div>
            <div className="m-10">
                
                <h2>Menu</h2>
                <ul>
                {
                    Object.values(restaurant?.menu?.items).map(
                        (item)=><li key={item.id}>{item.name}</li>
                    )
                }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;