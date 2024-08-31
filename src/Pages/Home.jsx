import React from 'react'
import LandingPage from '../components/LandingPage'
import Carousel from '../components/Carousel'
import MarqueeLogos from '../components/MarqueeLogos'
import VideoComp from '../components/VideoComp'
import Reports from '../components/Reports'
import AboutCompany from '../components/AboutCompany'


const Home = () => {
  return (
    <div>
       <section className="lg:h-[40rem] md:h-auto">
    <LandingPage/>
    </section>
    <Reports/>
    <section>
      <Carousel/>
    </section>
    <section>
      <MarqueeLogos/>
    </section>
    <section className="bg-gray-100">
      <VideoComp/>
    </section>
    <section>
      <AboutCompany/>
    </section>
    </div>
  )
}

export default Home
