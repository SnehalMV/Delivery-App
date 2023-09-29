import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_LIST_URL } from "../constants";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  useEffect(() => {
    getRestaurants()
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(FETCH_RESTAURANT_LIST_URL)
    const json = await data.json()
    console.log(json.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(json.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  return [allRestaurants, setAllRestaurants]
}

export default useRestaurantList