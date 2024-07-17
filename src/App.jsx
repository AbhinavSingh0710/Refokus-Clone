import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-zinc-900 '>
      {/* (Yaha se height aur width screen ki hatane ke baad thik hua hai) */}
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App


// const { scrollYProgress } = useScroll();

// scrollYProgress.on("change", (data) => {
//   function showImages(arr) {
//     setImages((prev) =>
//       prev.map((item, index) =>
//         arr.indexOf(index) === -1
//           ? { ...item, isActive: false }
//           : { ...item, isActive: true }
//       )
//     );
//   }

//   switch (Math.floor(data * 100)) {
//     case 0:
//       showImages([]);
//       break;
//     case 1:
//       showImages([0]);
//       break;
//     case 2:
//       showImages([0, 1]);
//       break;
//     case 3:
//       showImages([0, 1, 2]);
//       break;
//     case 4:
//       showImages([0, 1, 2, 3]);
//       break;
//     case 5:
//       showImages([0, 1, 2, 3, 4]);
//       break;
//     case 6:
//       showImages([0, 1, 2, 3, 4, 5]);

//       break;
//   }
// });