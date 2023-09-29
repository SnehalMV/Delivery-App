import { fireEvent, render, waitFor } from '@testing-library/react'
import Body from '../Body'
import { Provider } from 'react-redux'
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'
import { RESTAURANT_DATA } from '../../mocks/dummyRestaurantData'
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA)
  })
})

test("Restaurant List in Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>)

  await waitFor(() => body.getByTestId('search-btn'))
  const resList = body.getByTestId('res-list')
  expect(resList.children.length).toBe(20)
})

test("Shimmer loading Test during API call", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>)

  const shimmer = body.getByTestId("shimmer")
  expect(shimmer.children.length).toBe(15)
})

test("Search function testing with keyword FOOD", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>)

  await waitFor(() => body.getByTestId("res-list"))
  const input = body.getByTestId("search-input")
  fireEvent.change(input, {
    target: {
      value: "FOOD"
    }
  })

  const searchBtn = body.getByTestId("search-btn")
  fireEvent.click(searchBtn)

  const resList = body.getByTestId("res-list")
  expect(resList.children.length).toBe(1)
})

