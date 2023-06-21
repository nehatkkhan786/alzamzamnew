import React from 'react'
import About from '../components/About'
import BestSelling from '../components/BestSelling'
import CallToAction from '../components/CallToAction'
import CategorySection from '../components/CategorySection'
import ContactFooter from '../components/ContactFooter'
import FeatureProducts from '../components/FeatureProducts'
import Footer from '../components/Footer'
import HeroCarousal from '../components/HeroCarousal'
import Registration from '../components/Registration'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'

const Homepage = () => {
  return (
    <>
    <HeroCarousal/>
    <About/>
    <Stats/>
    <FeatureProducts/>
    <CategorySection/>
    <CallToAction/>
    <BestSelling/>
    <Testimonials/>
    <Registration/>
    <ContactFooter/>
    <Footer/>
    
    </>
  )
}

export default Homepage