import ReactDOM from "react-dom/client"
import { lazy, Suspense, useState } from "react";
import Header from "./components/Header"
import Body from "./components/Body.js";
import { Footer } from "./components/Footer.jsx";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./utils/store";

const About = lazy(() => import("./components/About"))
const Cart = lazy(() => import("./components/Cart"))


const App = () => {
    const [user, setUser] = useState({
        name: "Snehal MV",
        email: "snehalmv13@gmail.com"
    })

    return (
        <Provider store={store}>
            <UserContext.Provider value={{ user: user, setUser: setUser }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
    )
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "",
                element: <Body />
            },
            {
                path: "/about",
                children: [
                    {
                        path: "",
                        element: <Suspense fallback={<Shimmer />}><About /></Suspense>
                    },
                    {
                        path: "profile",
                        element: <ProfileClass />
                    }
                ]
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/cart",
                element: <Suspense fallback={<Shimmer />}><Cart /></Suspense>
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)         