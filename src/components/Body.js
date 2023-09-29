import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper"
import useRestaurantList from "../utils/useRestaurantList"
import useOnline from "../utils/useOnline"


const Body = () => {
  const [searchText, setSearchText] = useState('')
  const [allRestaurants, setAllRestaurants] = useRestaurantList()
  const [filteredRestaurants, setFilteredRestaurants] = useRestaurantList()

  const isOnline = useOnline()
  
  if (!isOnline) {
    return (
      <div>
        <h1>No Internet Connection</h1>
      </div>)
  }

  return filteredRestaurants?.length === 0 && searchText === ''?
    (
      <>
        <Shimmer /> 
      </>
    )
    :
    (
      <>
        <div className="flex mt-2 ml-9 text-xs">
          <input data-testid="search-input" type="text" className="border-2 min-h-0 p-1" placeholder="Search" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button data-testid="search-btn" className="bg-green-600 p-1 rounded-sm border-none text-white" onClick={() => {
            const data = filterData(allRestaurants, searchText)
            setFilteredRestaurants(data)
          }}>
            Search
          </button>
        </div>
        <div className="flex flex-wrap p-3 items-center justify-center" data-testid='res-list'>
          {(filteredRestaurants?.length) ?
            (
              filteredRestaurants.map(restaurant => {

                return <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info} /></Link>
              })
            )
            : 
            <h1>No Results</h1> 
          }
        </div>
      </>
    )
}

export default Body;