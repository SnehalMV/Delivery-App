import { fireEvent, render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'
import { MENU_DATA } from '../../mocks/dummyRestaurantData'
import RestaurantMenu from '../RestaurantMenu'
import Header from '../Header'
import Cart from '../Cart'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA)
  })
})

test("Search function testing with keyword FOOD", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>)

  await waitFor(() => menu.getByTestId("menu"))
  const count = menu.getByTestId("cart-count")
  const addBtn = menu.getAllByTestId("add-btn")

  fireEvent.click(addBtn[0])
  fireEvent.click(addBtn[1])
  fireEvent.click(addBtn[2])
  fireEvent.click(addBtn[3])


  expect(count.innerHTML).toBe('4')

})

test("Cart has Products List", async () => {
  const cart = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
        <Cart />
      </Provider>
    </StaticRouter>
  )
 
  await waitFor(() => cart.getByTestId("menu"))
  const addBtn = cart.getAllByTestId("add-btn")

  fireEvent.click(addBtn[0])
  
  const cartItems = cart.getByTestId("cart-items")

  expect(cartItems.children.length).toBe(5)
})