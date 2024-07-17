import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='text-white max-w-screen-lg mx-auto flex py-20 gap-32 '>
            <div className='basis-1/2'>
            <h1 className='text-[9rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex items-center gap-5'>
            <div className='basis-1/3'>
                <h3 className='mb-10'>Socials</h3>
                {["Instagram", "Twitter (X?)", "LinkedIn"].map((item,index)=><a className='block mt-3 text-zinc-500'>{item}</a>)}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-10'>Socials</h4>
                {["Instagram", "Twitter (X?)", "LinkedIn"].map((item,index)=><a className='block mt-3 text-zinc-500'>{item}</a>)}
            </div> 
            <div className='basis-1/2 flex flex-col items-end' >
                <p className='text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, id!</p>
                <img className='w-32 mt-10' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer