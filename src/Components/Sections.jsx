import React from 'react'

function Sections({data}) {
  return (
    <div className='w-full'> 
        <div className='items-center flex gap-3'>
            <div className='w-5 h-14 bg-[#db4444] rounded-md'></div>
            <h6 className='text-[#db4444] text-2xl font-bold'>{data.sec}</h6>
        </div>
        <h1 className='text-4xl font-semibold mt-4'>{data.title}</h1>

    </div>
  )
}

export default Sections