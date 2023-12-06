import React from 'react'

export default function Navbar() {
  return (
    <div className='flex text-xl items-center justify-between font-semibold bg-[rgb(37,65,81)] text-white'>
        <div className="flex p-4">
        <img src="" alt="" />
        <p>Akem</p>
        </div>
        <ul className="flex justify-between gap-12">
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
        </ul>
        <a href=""><button className='bg-[#F4CE50] p-8 px-16'>Donate</button></a>
    </div>
  )
}
