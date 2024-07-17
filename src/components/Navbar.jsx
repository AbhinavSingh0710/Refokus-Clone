import React from 'react'
import Button from './Button'


function Navbar() {
  return (
    <div className='max-w-screen-lg px-6 py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700'>
     <div className='nleft flex items-center'>
     <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='links flex gap-10 ml-12'>
            {["Home","Work","Culture","","News"].map((elem,index)=>(
                elem.length === 0 ? <span className='w-0.5 h-6 bg-zinc-100'></span> : <a className='font-regular text-sm text-white flex items-center gap-0.5' href=''>
                   
                {index===0 && <span style={{boxShadow: "0 0 0.35em #00FF19"}} className='inline-block h-1 w-1 bg-green-500 rounded-full'></span>}
                  {elem}
              </a>
            ))}
            
        </div>
     </div>
        <Button/>
        
    </div>
  )
}

export default Navbar