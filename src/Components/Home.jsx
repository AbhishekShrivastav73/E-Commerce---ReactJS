import React from 'react'

function Home() {
  return (
    <div className='w-full h-fit p-1 relative'>
      <img className='w-full md:h-[70vh] object-cover object-top' src="https://images.unsplash.com/photo-1640437830863-8f7f38327319?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="overlay md:gap-4 bg-black bg-opacity-5 p-8 absolute gap-2 top-0 w-full h-full text-white flex flex-col items-end justify-center ">
        <p className='md:text-2xl'>Iphone 14 Series</p>
        <h1 className='font-bold text-2xl md:text-5xl'>Upto 10% off Vouncher!</h1>
      
        <button className='bg-white md:text-xl px-3 py-1 font-bold rounded-sm text-black'>Shop Now</button>
      </div>
    </div>
  )
}

export default Home