
import { IMAGE_CDN } from "../utils/Constants";

const RestaurantCard = ({restaurant}) => {
    //console.log(restaurant);
    const {cloudinaryImageId, name, costForTwoString, cuisines, avgRating} = restaurant.data;
  return (
    <div className="h-80 w-72 m-2 p-2 bg-white flex flex-col relative">
        <img alt="image" src={IMAGE_CDN + cloudinaryImageId}/>
        <div className="flex justify-between ">
            <h1 className="font-bold m-1 text-lg leading-none flex items-center">{name}</h1>
            <h2 className="h-10 w-10  bg-yellow-300 m-1 px-2 rounded-full text-xs font-medium flex items-center justify-center">{avgRating} stars</h2>
        </div>
        <h3 className="m-1 text-sm">{cuisines?.join(", ")}</h3>
        
            <h3 className="m-1 w-[266] bg-green-400 text-center rounded-2xl text-lg font-bold absolute bottom-1">{costForTwoString}</h3>
        

    </div>
  )
}

export default RestaurantCard;