import Header from "../Header";
import { getAllByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'

test("LOGO loaded after header render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )

  const logo = header.getByTestId("logo")
  expect(logo.src).toBe("http://localhost/dummyImage.png")
})

test("Online Status after header render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )

  expect(header.getByTestId("isOnline").innerHTML).toBe("Online")
})

test("Cart should have 0 items after header render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )

  expect(header.getByTestId("cart-count").innerHTML).toBe("0")
})
