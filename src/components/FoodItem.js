import { IMAGE_CDN } from "../utils/Constants";

const FoodItem = ({cloudinaryImageId, name, price}) => {
  
    console.log("image ", cloudinaryImageId);
    console.log("name ", name);
    
  return (
    
          <div className="h-80 w-72 p-2 bg-white flex flex-col relative hover:border-4 hover:border-gray-600">
        
            <div>
            <img alt="image" src={IMAGE_CDN + cloudinaryImageId}/>
            <h1 className="font-bold m-1 text-lg leading-none flex items-center">{name}</h1>
            <h1 className="font-bold m-1 text-lg leading-none flex items-center">price: {price/100}</h1>     
            </div>      
        </div> 

  )
}

export default FoodItem;