import React from 'react'
import SupportCard from '../components/SupportCard'

export default function Support() {
  return (
    <div className='bg-[#eaeae8] px-24 py-44 pb-0'>
      <div className="pt-40 grid items-center justify-center text-center bg-white py-32 px-32 gap-6 rounded-xl">
        <p className='uppercase text-5xl font-bold text-[#d55342] p-8'>Support Us</p>
        <SupportCard />
      </div>
    </div>
  )
}
