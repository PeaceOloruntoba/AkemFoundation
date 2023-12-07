import React from 'react'

export default function Mission() {
  return (
    <div>
        <div className="flex">
            <div className="grid bg-[#eaeae8]">
                <p>our mission</p>
                <p>To empower individuals and communities through access to quality education and the development of entrepreneurial skills, fostering brighter futures and self-sustainability in underprivileged communities"</p>
                <a href="/">Read More</a>
            </div>
            <div className="grid">
                <p>Take a pledge</p>
                <a href="/"><button className='bg-white text-transparent'>Support Us</button></a>
            </div>
        </div>
        <div className="flex"></div>
    </div>
  )
}
