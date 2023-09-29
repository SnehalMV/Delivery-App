import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import { IMG_CDN_URL } from '../constants'
import useRestaurant from '../utils/useRestaurant'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'



const RestaurantMenu = () => {
  const { resId } = useParams()
  const { restaurant, menu } = useRestaurant(resId)

  const dispatch = useDispatch()

  const addMenuItem = (item) => {
    dispatch(addItem(item.card.info))
    console.log(item.card.info);
  }

  return (restaurant === null) ? <Shimmer /> :
    (

      <>
        <h1 className='m-2 text-3xl'>{restaurant.card?.card?.info?.name}</h1>
        <div className='flex justify-evenly mt-6'>
          <div>
            <img src={IMG_CDN_URL + restaurant?.card?.card?.info?.cloudinaryImageId}></img>
            <h3>{restaurant.card?.card?.info?.avgRating} stars</h3>
          </div>
          <div >
            <h2 className='text-2xl mb-2'>Menu</h2>
            <ul data-testid="menu">
              {menu.map((item, index) => {
                return (<li key={{ resId } + index} className='list-none'><p className='flex justify-between p-1'>{item?.card?.info?.name} - <button data-testid="add-btn" className='bg-green-100 text-xs px-3 ml-10 rounded-xl' onClick={() => {
                  addMenuItem(item)
                }}>Add</button></p></li>)
              })}
            </ul>
          </div>
        </div>
      </>
    )
}

export default RestaurantMenu