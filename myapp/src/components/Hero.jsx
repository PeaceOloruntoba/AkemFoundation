import React from 'react'
import { herobg } from '../assets'

export default function Hero() {
  return (
    <div>
    <div className='relative uppercase -z-10'>
        <img src={herobg} alt="" />
        <div className="text-lg absolute flex flex-col justify-center px-16 text-white inset-0 bg-gray-700 bg-opacity-50">
          <span className='text-6xl font-semibold p-4 px-16'>Akem Foundation</span>
          <span className='text-2xl font-semibold p-4 px-16 text-[#F4CE50]'>Empowering Communities Through Education and Enterpreneurship</span>
        </div>
    </div>
    <div className='p-32 -mt-96 pt-8 '>
        <div className="flex">
            <div className="grid bg-[#eaeae8] px-32 py-16 items-center justify-center text-center">
                <p className='uppercase font-semibold text-5xl py-4 px-8 '>our mission</p>
                <p className='font-semibold text-lg py-4 px-8'>To empower individuals and communities through access to quality education and the development of entrepreneurial skills, fostering brighter futures and self-sustainability in underprivileged communities</p>
                <a href="/" className='text-xl text-{#45b29d} underline'>Read More</a>
            </div>
            <div className="grid bg-[#8e372c] w-full py-16 items-center justify-center text-center">
                <p className='text-5xl text-white uppercase font-semibold'>Take a pledge!</p>
                <a href="/support"><button className='bg-white text-[#8e372c] text-xl p-3 rounded-full text-center font-semibold uppercase'>Support Us</button></a>
            </div>
        </div>
        <div className="flex text-white ">
            <div className="grid bg-[#45b29d] px-32 py-16 items-center justify-center text-center">
                <p className='uppercase font-semibold text-5xl py-4 px-8 '>latest news</p>
                <p className='font-semibold text-lg py-4 px-8'>The children of Late (Engr) Akinola and Emiola Ogunsan launch AKEM Foundation as a legacy of their parents at Civic Center on the 8th of January, 2023. The event was graced by respected personalities like the ...</p>
                <a href="/" className='text-xl text-{#45b29d} underline'>Read More</a>
            </div>
            <div className="grid bg-[#254151] w-full py-16 items-center justify-center text-center px-3.5">
                <p className='text-5xl uppercase font-semibold'>Subscribe</p>
                <p>Subscribe to Our Newsletter</p>
                <form action="" className='grid gap-4'>
                <input type="email" placeholder='Enter your email here*' className='outline-none bg-transparent border-b p-4'  />
                <button type="submit">Join</button>
                </form>
            </div>
        </div>
    </div>

    </div>
  )
}
