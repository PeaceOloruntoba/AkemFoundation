import React from 'react'
import EventCard from '../components/EventCard'

export default function Events() {
  return (
    <div className='bg-[#eaeae8] px-24 py-44 pb-0'>
      <div className="pt-40 grid items-center justify-center text-center bg-white py-32 px-72 gap-6 rounded-xl">
      <p className='uppercase text-5xl font-bold text-[#d55342] p-8'>upcoming Event</p>
      <EventCard />
      </div>
    </div>
  )
}
