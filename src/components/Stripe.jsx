import React from 'react'

function Stripe({val}) {

   
  return (
    <div className='w-[16.66%] px-2 py-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between text-white mt-20'>
        <img src={val.url} alt="" />
        <span>{val.number}</span>
    </div>
  )
}

export default Stripe