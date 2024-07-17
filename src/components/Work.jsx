import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://plus.unsplash.com/premium_photo-1673652043200-3c8e15f1afc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1717062010902-ff2a4671b34d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1681426418014-f47a68cea58d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1663603847412-1121ef5f5c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1718306502553-0108d0bc36c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
      top: "43%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1681426418014-f47a68cea58d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {

    function showImages(arr){
      setImages(prev=>(
        prev.map((item,index)=>(
          arr.indexOf(index) === -1 ? (
            {...item,isActive:false}
          )
          : {...item,isActive:true}
        ))
      ))
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImages([])
        break;
      case 1:
        showImages([0])

        break;
      case 3:
        showImages([0,1])

        break;
      case 4:
        showImages([0,1,2])

        break;
      case 5:
        showImages([0,1,2,3])

        break;
      case 6:
        showImages([0,1,2,3,4])

        break;
      case 7:
        showImages([0,1,2,3,4,5])

        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[28vw] text-white font-medium leading-none select-none tracking-tight mt-5 relative">
          Work
        </h1>
        <div className="absolute h-full w-full top-9">
          {images.map(
            (elem, index) =>
              elem.isActive === true && (
                <img
                  className="absolute w-52  object-cover rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
