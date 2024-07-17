import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imageurls,direction}) {
  return (
    <div className='py-8 flex items-center gap-[50px] overflow-hidden whitespace-nowrap'>
        <motion.div initial={{x: direction==="left" ? "0" : "calc(-100% - 50px)"}} animate={{x: direction==="left" ? "calc(-100% - 50px)" : "0"}} transition={{ease:"linear", duration:10, repeat:Infinity}}  className='flex flex-shrink-0 gap-20'>
        {imageurls.map(url=><img src={url} className=''/>)}
        </motion.div>
        <motion.div initial={{x: direction==="left" ? "0" : "calc(-100% - 50px)"}} animate={{x: direction==="left" ? "calc(-100% - 50px)" : "0"}} transition={{ease:"linear", duration:10, repeat:Infinity}}  className='flex flex-shrink-0 gap-20'>
        {imageurls.map(url=><img src={url} className=''/>)}
        </motion.div>
       
    </div>
  )
}

export default Marquee