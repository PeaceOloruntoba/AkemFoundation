import React from 'react'
import { herobg } from '../assets'

export default function Hero() {
  return (
    <div>
    <div className='relative uppercase'>
        <img src={herobg} alt="" />
        <div className="text-lg absolute flex flex-col justify-center px-16 text-white inset-0 bg-gray-700 bg-opacity-50">
          <span className='text-6xl font-semibold p-4 px-16'>Akem Foundation</span>
          <span className='text-2xl font-semibold p-4 px-16 text-[#F4CE50]'>Empowering Communities Through Education and Enterpreneurship</span>
        </div>
    </div>

    </div>
  )
}
