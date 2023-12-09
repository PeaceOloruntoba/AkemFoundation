import React from 'react'
import ContacctForm from '../components/ContacctForm'

export default function Contact() {
  return (
    <div className='bg-[#eaeae8] px-24 py-44 pb-0'>
      <div className="pt-40 grid items-center justify-center text-center bg-white py-32 px-32 gap-6 rounded-xl">
        <p className='uppercase text-5xl font-bold text-[#d55342] p-8'>connect with us today</p>
        <ContacctForm />
      </div>
    </div>
  )
}
