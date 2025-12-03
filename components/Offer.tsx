import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
    return (
        <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/burgerBg2.jpg")] md:h-[70vh]'>
            {/* TEXT CONTAINER */}
            <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
                <h1 className="text-white text-5xl font-bold xl:text-6xl">Savory Burger & Golden Fries</h1>
                <p className="text-white xl:text-xl">
                    Enjoy a perfectly crafted burger paired with crispy, golden fries for a flavor-packed experience. Each bite delivers rich taste and satisfying crunch, giving you a meal that hits the spot every time.
                </p>
                <CountDown />
                <button className='bg-red-500 text-white rounded-md py-3 px-6 cursor-pointer'>Order Now</button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className='relative flex-1 w-full md:h-full'>
                <Image src='/offerProduct.png' alt='' fill className='object-contain' />
            </div>
        </div>
    )
}

export default Offer