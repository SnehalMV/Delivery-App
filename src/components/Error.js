import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError()
  return (
    <div className="text-center mt-28">
    <h2 className="text-3xl m-3">
      OOPS!!
    </h2>
    <h3>
      Something Went Wrong :(
    </h3>
    <h4>{err.status + "  :  " + err.statusText}</h4> 
    <button className="bg-green-500 rounded-sm border-none text-white m-5 p-4"><Link to='/'>Back to Home</Link></button>
    </div>
  )
}

export default Error