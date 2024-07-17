import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Card({ width, start, para, hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: hover===true && "#7443ff",padding: "25px"}} className={`text-white  ${width} bg-zinc-800 p-5 rounded-xl flex flex-col justify-between min-h-[27rem]`}>
      <div className="w-full h-full">
        <div className="flex items-center justify-between">
          <h3>one heading</h3>
          <MdOutlineArrowRightAlt />
        </div>
        <h1 className="text-xl mt-6">Whatever heading</h1>
      </div>

      {start && (
        <>
          <h1 className=" text-5xl font-medium leading-none tracking-tight">
            Start a project
          </h1>
          <button className="rounded-full px-4 py-2 border-[1px] mt-5 w-fit ">
            Kuch toh hai
          </button>
        </>
      )}

     {
        para && (
            <p className="text-sm mt-1 text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet.
          </p>
        )
     }
    </motion.div>
  );
}

export default Card;
