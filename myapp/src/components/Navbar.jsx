import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full fixed z-20'>
    <div className='flex text-xl items-center justify-between font-semibold bg-[rgb(37,65,81)] text-white'>
        <div className="flex p-4">
        <img src="" alt="" />
        <p>Akem</p>
        </div>
        <ul className="flex justify-between gap-12">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Who We Are</a></li>
            <li><a href="/support">Support Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="/donate"><button className='bg-[#F4CE50] p-8 px-16'>Donate</button></a>
    </div>
    </nav>
  )
}
