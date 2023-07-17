
import Hero from './components/Hero'
import Programs from './components/Programs'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import backgroundImage from './assets/background.png'
import logo from './assets/Gclub.png'


import { useRef } from 'react';
import React from 'react'


function App() {

    const heroRef = useRef();
    const programRef = useRef();
    const planRef = useRef();
    const testRef = useRef();

    const scrollToPlans = () => {
      planRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    const scrollToPrograms = () => {
      programRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    const scrollToTestimonals = () => {
      testRef.current.scrollIntoView({ behavior: 'smooth'})
    }


  return (

      <div className="h-full w-screen flex flex-col items-center bg-[#303034] bg-repeat text-white " style={{ backgroundImage: `url(${backgroundImage})` }}>
        <nav className="flex flex-row w-full justify-between pt-6 pr-6">
          
          <div className="flex flex-row items-center justify-start space-x-4 ml-4 ">
            <div className="w-32 drop-shadow-2xl shadow-black"><img src={logo}/> 
            </div>
            <p className="font-outline-2 text-4xl sm:text-6xl font-bold">The <i className="text-[#eb3118] ">G</i>ym</p>
            </div>

          <div className="flex flex-row items-center justify-end gap-8">
          <button onClick={() => scrollToPrograms()}>Programs</button>
            <button onClick={() => scrollToPlans()}>Plans</button>
          <button onClick={() => scrollToTestimonals()}>Testimonials</button>
          <button className="bg-white text-black px-2 py-2 font-bold ">Join Now</button></div>
        </nav>
        
      
      <div className="flex flex-col w-[90%] h-full justify-center items-center gap-20 ">
        
      <Hero />
      <Programs refProgram={programRef}/>
      <Plans refPlan={planRef}/>
      <Testimonials refTest={testRef}/>

      
      </div>
      <Footer />
      



      </div>


  )
}

export default App


