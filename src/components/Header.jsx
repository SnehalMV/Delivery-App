import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Logo from "../assets/images/pngtree-food-logo-png-image_5687709.png"
import useOnline from "../utils/useOnline"

const Title = () => {
  return (
    <a href="/">
      <img data-testid="logo" alt="logo" className="h-16" src={Logo} />
    </a>
  )
}


const Header = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items
  })

  const isOnline = useOnline()

  return (
    <div className="flex items-center justify-between p-2 bg-green-50">
      <Title />
      {/* <div data-testid='isOnline'>{isOnline ? "Online" : "Offline"}</div> */}

      <div className="flex justify-between items-center">
        <ul className="flex text-sm">
          <li className="pr-2 "><Link to={"/"} style={{ textDecoration: "inherit", color: "inherit" }}>Home</Link></li>
          <li className="pr-2 "><Link to={"/about"} style={{ textDecoration: "inherit", color: "inherit" }}>About</Link></li>
          <li className="pr-2 ">Contact</li>
          <li className="pr-2 "><Link to={"/cart"} style={{ textDecoration: "inherit", color: "inherit" }}>Cart <span data-testid="cart-count" className="bg-red-500 px-1 text-xs rounded-full text-white">{cartItems.length}</span></Link></li>
        </ul>
        <button className="bg-cyan-100 px-3 text-xs font-semibold py-1 m-2 ml-6 rounded-xl hover:bg-cyan-300 duration-200"><Link to={"/login"}>Login</Link></button>
      </div>
    </div>
  )
}

export default Header
