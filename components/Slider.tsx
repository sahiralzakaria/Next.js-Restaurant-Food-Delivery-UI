'use client';

import Image from 'next/image'
import { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "freshly baked pizza with irresistible flavor",
    image: "/pizza1.jpg",
  },
  {
    id: 2,
    title: "hot pizza delivered straight to your door",
    image: "/pizza3.jpg",
  },
  {
    id: 3,
    title: "share the perfect pizza with the ones you love",
    image: "/pizza4.jpg",
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {

  //   const interval = setInterval(
  //     () => setCurrentSlide((prev) => (prev === data.length - 1) ? 0 : prev + 1), 2000
  //   );
  //   return () => clearInterval(interval);
  // }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full '>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>{data[currentSlide].title}</h1>
        <button className='bg-red-500 text-white px-8 py-4 cursor-pointer '>Order Now</button>
      </div>
      {/* IMAGE CONATINER */}
      <div className='w-full flex-1 relative lg:h-full '>
        <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
      </div>

    </div>
  )
}

export default Slider