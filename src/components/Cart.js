import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'


const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items
  })

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-3xl mt-3 mb-5 ml-14'>CART</h1>
        <br></br>
        <button className='bg-cyan-200 text-sm p-2 mx-3 rounded-xl hover:bg-cyan-300 duration-200' onClick={() => {
          handleClearCart()
        }}>Clear Cart</button>
      </div>
      <div data-testid="cart-items">
        {
          cartItems.map(item => {
            return (
              <CartItem key={item.id} {...item} />
            )
          })
        }
      </div>
    </>
  )
}

export default Cart  