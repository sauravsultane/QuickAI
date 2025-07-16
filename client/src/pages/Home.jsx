import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <NavBar/>
    <Hero/>
    <AiTools/>
    <Testimonial/>
    <Plan/>
    <Footer/> 
    </div>
  )
}

export default Home
