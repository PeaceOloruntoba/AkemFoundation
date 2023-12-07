import React from 'react'
import Hero from '../components/Hero'
import Events from '../components/Events'
import News from '../components/News'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Hero />
        <Events />
        <News />
        <Footer />
    </div>
  )
}
