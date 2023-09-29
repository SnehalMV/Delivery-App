const Shimmer = () => {
  return (
    <div className="px-5 mt-5 flex flex-wrap items-center justify-center" data-testid="shimmer">
      {Array(15).fill('').map((o, index) => (
        <div key={index}>
          <div className="h-[141.1px] w-[224] bg-gray-100 m-3 p-3"></div>
          <h3 className="text-xl text-gray-100  bg-gray-100 m-3 p-3">Blank</h3>
          <h5 className="text-gray-100 bg-gray-100 m-3 p-3">Blank</h5>
          <h5 className="text-gray-100 bg-gray-100 m-3 p-3">Blank</h5>
        </div>))}
    </div>)
}

export default Shimmer 

 
  