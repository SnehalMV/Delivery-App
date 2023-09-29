import {IMG_CDN_URL} from "../constants"

const RestaurantCard = ({ name, cuisines, costForTwoString, lastMileTravelString, cloudinaryImageId }) => (
  <div className="w-60 h-96 m-2 p-2 hover:shadow-lg">
      <img className="cardImage" src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3 className="text-xl pt-2 pb-2">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwoString}</h5>
      <h6 className="text-xs">{lastMileTravelString}</h6>
  </div>
)

export default RestaurantCard        