import { useState, useContext } from "react"
import UserContext from "../utils/UserContext"

const Section = ({ title, description, isVisible, setIsVisible, hide }) => {
  return (
    <div className="p-2 m-3 border-2 hover:shadow-lg ">
      <div className="flex justify-between">
        <p className=" p-2 text-xl">{title}</p>
        {
          isVisible ? (<button onClick={() => {
            hide()
          }} className="text-xs text-gray-500 underline">Hide</button>) :
            <button onClick={() => {
              setIsVisible()
            }} className="text-xs text-gray-500 underline">Show</button>
        }
      </div>
      <p className="m-2"> {isVisible && description} </p>
    </div>
  )
}


const About = () => {
  const { user } = useContext(UserContext)
  const [visibleSection, setVisibleSection] = useState("")
  const hideSection = () => {
    setVisibleSection("")
  }
  return (
    <>
      <div className="mt-32">
        <h1 className="p-2 text-center">
          Created By {user.name}
        </h1>
        <h4 className="p-2 mb-20 text-center">
          Created Using REACT
        </h4>
        <Section title={"About"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} isVisible={visibleSection == "about"} setIsVisible={() => {
          setVisibleSection("about")
        }} hide={hideSection} />
        <Section title={"Careers"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} isVisible={visibleSection == "careers"} setIsVisible={() => {
          setVisibleSection("careers")
        }} hide={hideSection} />
      </div>
    </>
  )
}

export default About