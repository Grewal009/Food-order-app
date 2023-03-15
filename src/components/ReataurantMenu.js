import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN } from "../utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
    //console.log(params);

    const restaurant = useRestaurantMenu(id);

    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
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
                
                <h2 className="text-2xl font-bold">Menu:</h2>
                <ul>
                {
                    Object.values(restaurant?.menu?.items).map(
                        (item)=><li key={item.id}>{item.name} <button className="px-2 m-1 bg-green-400 rounded-md" onClick={()=>handleAddItem(item)}>Add to cart</button></li>
                    )
                }
                </ul>
                
            </div>
        </div>
    )
}

export default RestaurantMenu;