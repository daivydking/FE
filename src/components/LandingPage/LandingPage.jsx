import React from 'react'
import Navbar from './Navbar';
import Hero  from './Hero';
import Mission from './Mission';
import Features from './Features';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Mission />
        <Features />
        <Footer />
    </div>
  )
}

export default LandingPage