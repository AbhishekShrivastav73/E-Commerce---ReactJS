import React from 'react'

function ProductCards({productsData}) {
  return (
    <>
   <div className='w-64 h-72 bg-zinc-200 rounded-md overflow-hidden p-2'>
            <div className="imgs w-full h-2/3 bg-zinc-50">
                <img className='w-full h-full object-cover' src={productsData.image} alt="" />
            </div>
            <p>{productsData.title}</p>
            <h4>Lorem ipsum dolor sit.</h4>
            <p>{productsData.price}</p>
        </div>
    
    </>
  )
}

export default ProductCards