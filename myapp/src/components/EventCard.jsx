import React from 'react'
import { event1 } from '../assets'

export default function EventCard() {
  return (
    <div>
        <div className="flex gap-8 px-72 py-12">
        <div className="grid border rounded-xl items-center justify-center text-center hover:-translate-y-10 transform transition-transform duration-700">
          <img src={event1} alt="" className='rounded-t-xl' />
          <div className="grid gap-4 px-32 pb-8">
          <p className='font-semibold text-2xl py-2'>Upcoming Event</p>
          <p className='text-xl flex gap-6 items-center justify-center'>
            <span>Sun, 04 Feb</span>|<span>Here</span>
          </p>
          <button className='bg-[#254151] rounded-full p-4 items-center text-white font-semibold'>REGISTER NOW</button>
          </div>
        </div>
        <div className="grid border rounded-xl items-center justify-center text-center hover:-translate-y-10 transform transition-transform duration-700">
          <img src={event1} alt="" className='rounded-t-xl' />
          <div className="grid gap-4 px-32 pb-8">
          <p className='font-semibold text-2xl py-2'>Upcoming Event</p>
          <p className='text-xl flex gap-6 items-center justify-center'>
            <span>Sun, 04 Feb</span>|<span>...</span>
          </p>
          <button className='bg-[#254151] rounded-full p-4 items-center text-white font-semibold'>REGISTER NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}
