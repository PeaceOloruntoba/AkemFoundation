import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#eaeae8] '>
        <div className="flex text-md gap-10 items-center justify-center p-6">
            <div className="grid">
                <p className='text-3xl uppercase font-semibold py-4'>contact us</p>
                <span>8, Olashehu Street, Iyana Ipaja,</span><span>Alimosho, Lagos State</span><span>Nigeria.</span>
            </div>
            <div className="grid">
                <p className='text-3xl uppercase font-semibold py-4'>connect with us</p>
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">Twitter</a>
            </div>
            <div className="grid">
                <p className='text-3xl uppercase font-semibold py-4'>subscribe</p>
                <form action="" className='grid'>
                    <input type="email" placeholder='Email here*' className='bg-transparent outline-none border-b border-b-[rgb(37,65,81)] px-2 py-1 mb-1' />
                    <button type="submit" className='bg-[rgb(37,65,81)] text-white px-6  py-1 rounded-full'>Join</button>
                </form>
            </div>
        </div>
        <div className="bg-[rgb(37,65,81)] text-white ">
            copyright 2023
        </div>
    </div>
  )
}
