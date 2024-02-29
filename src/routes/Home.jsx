import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyProsuite from '../components/whyProsuite'
import OurSolutions from '../components/ourSolutions'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <WhyProsuite/>
        <OurSolutions/>
        <Footer/>
    </div>
  )
}

export default Home