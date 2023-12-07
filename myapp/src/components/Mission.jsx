import React from 'react'

export default function Mission() {
  return (
    <div>
        <div className="flex p-32">
            <div className="grid bg-[#eaeae8] px-32 py-16 items-center justify-center text-center">
                <p className='uppercase font-semibold text-5xl py-4 px-8 '>our mission</p>
                <p className='uppercase font-semibold text-2xl py-4 px-8'>To empower individuals and communities through access to quality education and the development of entrepreneurial skills, fostering brighter futures and self-sustainability in underprivileged communities"</p>
                <a href="/" className='text-xl text-purple-800 underline'>Read More</a>
            </div>
            <div className="grid bg-[#]">
                <p>Take a pledge</p>
                <a href="/"><button className='bg-white text-transparent'>Support Us</button></a>
            </div>
        </div>
        <div className="flex"></div>
    </div>
  )
}
