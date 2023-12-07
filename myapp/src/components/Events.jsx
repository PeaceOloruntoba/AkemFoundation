import React from 'react'
import { event1, event2 } from '../assets'

export default function Events() {
  return (
    <div className='grid items-center justify-center text-center'>
      <p className='text-5xl font-semibold p-8 uppercase'>Our Events</p>
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
      <div className='py-32 px-52' py-32 px-64>
      <div className="flex py-20 items-center justify-center gap-8 font-semibold bg-[#8e372c] bg-opacity-90">
        <p className='text-white uppercase text-4xl'>give today to help end illiteracy</p>
        <a href="/donate"><button className='bg-white text-xl p-2 px-6 rounded-full hover:bg-transparent hover:border transition duration-300 ease-in-out'>Donate Now!</button></a>
      </div>
      </div>
    </div>
  )
}
