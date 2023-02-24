
import RestaurantCard from "./RestaurantCard";
import { RESTRO_DATA } from "../utils/Constants";

const Body = () => {
  const restro = RESTRO_DATA;
  
  return (
    <div className="bg-yellow-200 min-h-screen px-5 py-7 flex flex-wrap justify-center">
      {restro.map(
        (rest)=><RestaurantCard restaurant={rest} />
      )}

      
      
     
    </div>
  )
}

export default Body;