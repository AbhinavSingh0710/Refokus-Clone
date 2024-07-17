import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "Ariqtel",
      description:
        "something else here is there for i need to yeah so good information so yeah this should be enough for me",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "something else here is there for i need to yeah so good information so yeah this should be enough for me",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "something else here is there for i need to yeah so good information so yeah this should be enough for me",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "something else here is there for i need to yeah so good information so yeah this should be enough for me",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "something else here is there for i need to yeah so good information so yeah this should be enough for me",
      live: true,
      case: true,
    },
  ];

  const [pos, setpos] = useState();

  const mover = (val) => setpos(val * 20);

  return (
    <div className="mt-20 relative">
      {products.map((val, index) => (
        <Product val={val} count={mover} index={index} />
      ))}
      <motion.div
        initial={{ y: pos }}
        animate={{ y: pos + `rem` }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
        className="absolute w-full h-full top-0 pointer-events-none"
      >
        <div className="absolute w-96 h-[20rem] bg-white left-[45%] -translate-x-[50%] overflow-hidden">
          <motion.div
            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1719859891354-1cf01dd78ae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D)'}}
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-white"
          ></motion.div>
          <motion.div
          style={{backgroundImage: 'url(https://images.unsplash.com/photo-1719300368274-9efe9c6b2d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D)'}}
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Products;
