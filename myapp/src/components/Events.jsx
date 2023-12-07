import React from 'react'
import EventCard from './EventCard'

export default function Events() {
  return (
    <div className='grid items-center justify-center text-center'>
      <p className='text-5xl font-semibold p-8 uppercase'>Our Events</p>
      <EventCard />
      <div className='py-32 px-52' py-32 px-64>
      <div className="flex py-20 items-center justify-center gap-8 font-semibold bg-[#8e372c] bg-opacity-90">
        <p className='text-white uppercase text-4xl'>give today to help end illiteracy</p>
        <a href="/donate"><button className='bg-white text-xl p-2 px-6 rounded-full hover:bg-transparent hover:border transition duration-300 ease-in-out'>Donate Now!</button></a>
      </div>
      </div>
    </div>
  )
}
