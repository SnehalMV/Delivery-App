import { useEffect, useState } from "react"
import { FETCH_RESTAURANT_URL } from "../constants"

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null)
  const [menu, setMenu] = useState([])
  useEffect(() => {
    getMenu()
  }, [])

  async function getMenu() {
    const data = await fetch(FETCH_RESTAURANT_URL + resId + "&submitAction=ENTER")
    const json = await data.json()
    setRestaurant(json.data?.cards[0])
    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards)
  }

  return {restaurant, menu}
}

export default useRestaurant