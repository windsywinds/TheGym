import HeroImage from '../assets/hero.png'
import React from 'react';
import CountUp from 'react-countup';

function Hero() {

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-evenly h-full ">
                <div id="HeroText" className="flex flex-col h-full ">
                    <p className="bg-orange-400 opacity-40 py-60 px-60 rounded-full blur-3xl  absolute z-10"></p>
   
                    <div className="flex flex-col z-30  text-6xl font-bold items-center sm:items-start pt-8">
                        <p className=" flex flex-row"><p className="font-outline-0 pr-6">YOUR</p>GYM</p>
                        <p className=" flex flex-row py-5"><p className="font-outline-0 pr-6">YOUR</p>BODY</p>   
                        <p className=" flex flex-row"><p className="font-outline-0 pr-6">YOUR</p>PACE</p>
                    </div>
        
                    <div className="pt-8  text-lg z-30 ">
                        <p>Here at The Gym we help you to shape your body at your own pace to meet your goals.</p>
                    </div>

                    <div className="flex flex-row text-xl sm:text-2xl space-x-8 z-30 pt-8 ">                        
                        <p><CountUp end={10} /> + <p>Elite Coaches</p></p>
                        <p><CountUp end={20} /> + <p>Specialised Programs</p></p>
                        <p><CountUp end={300} /> + <p>Gym Members</p></p>
                    </div>
                </div>
        

                    
                <div id="heroimage" className="hidden sm:block bg-contain bg-no-repeat bg-center w-1/3 sm:w-1/2 h-full z-30 " style={{ backgroundImage: `url(${HeroImage})`}} >
                <p className=" py-60    z-10"></p> 
                </div>
         
            </div>

        

            <div className=" flex flex-col gap-4 sm:flex-row px-20 pt-4">
                <button className="bg-orange-500 px-6 py-4 font-bold">Get Started</button> <button className="border-orange-500 border-2 px-6 py-3 font-bold">Learn More</button>
            </div>
        </div>
    )
}

export default Hero;