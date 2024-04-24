import React from 'react'
import { Link } from 'react-router-dom'

function TopNav() {
  return (
    <div className='w-full bg-black text-white px-3 py-2'>
        <h5 className='text-[10px] md:text-[1vw] text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link className='underline font-bold' to='/home'>Shop Now</Link></h5>
    </div>
  )
}

export default TopNav