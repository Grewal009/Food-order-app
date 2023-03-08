import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN } from "../utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
    //console.log(params);

    const restaurant = useRestaurantMenu(id);

    
   
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