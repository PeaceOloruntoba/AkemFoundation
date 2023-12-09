import React from 'react'
import { event1 } from '../assets'

export default function SupportCard() {
  return (
    <div>
          <div className="grid gap-16">
          <div className="flex text-2xl gap-10">
            <img src={event1} alt="" className='w-80 rounded-lg shadow shadow-gray-400' />
            <div className="grid p-8 rounded-lg shadow shadow-gray-400">
              <p className='text-3xl font-bold uppercase'>Education Program</p>
              <p>We provide educational scholarships and resources to students in underprivileged communities to help them access quality education and reach their full potential.</p>
            </div>
            <div className="grid p-8 rounded-lg shadow shadow-gray-400">
              <p className="text-3xl font-bold uppercase">Donate</p>
              <p>Your donation will help fund our programs and make a real difference in the lives of individuals and communities in need.</p>
            </div>
          </div>
          <div className="flex text-2xl gap-10">
            <img src={event1} alt="" className='w-80 rounded-lg shadow shadow-gray-400' />
            <div className="grid p-8 rounded-lg shadow shadow-gray-400">
              <p className='text-3xl font-bold uppercase'>Enterpreneurship Program</p>
              <p>We offer training, mentorship, and resources to individuals in underprivileged communities to help them start and grow their own businesses.</p>
            </div>
            <div className="grid p-8 rounded-lg shadow shadow-gray-400">
              <p className="text-3xl font-bold uppercase">Volunteer</p>
              <p>We are always looking for passionate individuals to help us with various tasks, from mentoring entrepreneurs to tutoring students.</p>
            </div>
          </div>
          <div className="flex text-2xl gap-10">
            <img src={event1} alt="" className='w-80 rounded-lg shadow shadow-gray-400' />
            <div className="grid p-8 rounded-lg shadow shadow-gray-400">
              <p className='text-3xl font-bold uppercase'>Community Outreach</p>
              <p>We work with local organizations and community leaders to understand the unique needs of each community and tailor our programs to best serve them.</p>
            </div>
            <div className="grid p-8 rounded-lg shadow shadow-gray-400">
              <p className="text-3xl font-bold uppercase">Partner</p>
              <p>We value the partnerships with other organizations and businesses that share our vision and mission.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
