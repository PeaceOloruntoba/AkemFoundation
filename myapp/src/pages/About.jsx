import React from 'react'
import { about } from '../assets'

export default function About() {
  return (
    <div className='bg-[#eaeae8] px-24 py-44 pb-0'>
      <div className="flex flex-col items-center justify-center text-center bg-white py-32 px-72 gap-6 rounded-xl">
        <p className='uppercase text-5xl font-bold text-[#d55342]'>about</p>
        <p className='text-xl font-light'>AKEM foundation is a non-profit organization dedicated to supporting education and entrepreneurship in underprivileged communities. Our mission is to empower individuals and communities through access to quality education and the development of entrepreneurial skills.</p>
        <img src={about} alt="" className='rounded-xl hover:scale-125 m-10 shadow-2xl shadow-gray-800 transition duration-500' />
        <a href="/support"><button className='bg-[rgb(37,65,81)] text-white font-semibold text-xl uppercase py-2 px-6 rounded-full hover:scale-125 transition duration-500 mt-12'>Support us today</button></a>
      </div>
    </div>
  )
}
