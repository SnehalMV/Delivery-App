import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center mt-14'>
      <div className='flex justify-center items-center h-96 w-96 bg-purple-100 rounded-3xl'>
        <div className='flex flex-col items-center justify-between'>
          <span className='text-2xl font-thin ml-2 mb-2 p-2'>Login</span>
          <div className='flex flex-col mb-2'>
            <label className='ml-2 text-xs mb-1'>Username</label>
            <input className='ml-2 p-1' />
          </div>
          <div className='flex flex-col mt-2'>
            <label className='ml-2 text-xs mb-1'>Password</label>
            <input className='ml-2 p-1' />
          </div>
          <button className='ml-2 mt-5 p-2 text-xs bg-pink-200 rounded-lg hover:bg-pink-300 duration-200'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login 