const CartItem = ({ name, category, price, description}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-start justify-center w-2/3 h-48 m-2 p-2 hover:shadow-lg bg-green-50">
        <h3 className="text-xl pt-2 pb-2">{name}</h3>
        <h5>{category}</h5>
        <h1>Rs. {price/100}</h1>
        <h5>{description}</h5>
      </div>
    </div>
  )
}

export default CartItem