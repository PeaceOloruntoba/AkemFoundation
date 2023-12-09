import React from 'react'

export default function ContacctForm() {
  return (
    <div className='flex flex-row text-xl gap-16'>
        <div className="flex-col text-start text-2xl w-1/2 p-8">
            <p className='py-8 flex'>If you have questions or would love to connect with us or support, kindly visit, call or send ups a mail.</p>
            <a href="tel:+2348023529950" className='py-8 flex'>+234-802-352-9950</a>
            <p className='py-8 flex'>8, Olashehu Street, Iyana Ipaja, Alimosho, Lagos State, Nigeria.</p>
            <a href="mailto:info@akemfoundation.org py-8 flex">info@akemfoundation.org</a>
        </div>
        <form action="" className="grid gap-10 w-1/2">
            <div className="flex gap-10">
                <input type="text" name="name" id="" placeholder='Name' className='text-gray-800 border-b border-gray-800 focus:border-b-2 focus:outline-none p-4 w-full' />
                <input type="email" name="email" id="" placeholder='Email' className='text-gray-800 border-b border-gray-800 focus:border-b-2 focus:outline-none p-4 w-full' />
            </div>
            <input type="text" name="subject" id="" placeholder='Subject' className='text-gray-800 border-b border-gray-800 focus:border-b-2 focus:outline-none p-4' />
            <input type="tel" name="phone" id="" placeholder='Phone' className='text-gray-800 border-b border-gray-800 focus:border-b-2 focus:outline-none p-4' />
            <textarea name="message" id="" rows="5" placeholder='Message' className='text-gray-800 border-b border-gray-800 focus:border-b-2 focus:outline-none p-4'></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
