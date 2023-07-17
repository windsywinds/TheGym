import React from 'react';

function Plans({refPlan}) {

    return (
        <div className="flex flex-col items-center justify-center" ref={refPlan}>

                <div className="flex flex-row font-bold text-4xl py-16 text-center">
                    <i>
                <p>READY TO</p>
                <p className="font-outline-white">LEVEL UP</p>
                <p>WITH US?</p></i>
                </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-20  text-lg">

        <div className=" bg-gray-500 px-12 py-12 w-80">
                <p className="text-3xl font-bold pb-5">The Casual Plan</p>
                <p className="text-6xl font-bold pb-5">$25</p>
                <p className="pb-4">5 Visits per month</p>
                <p className="pb-4">Up to 1 hours</p>
                <p className="pb-4">words3</p>
                <button className="bg-orange-500 py-4 w-full">Join Now</button>
            </div>

            <div className="md:h-[120%]">
            <div className="bg-gradient-to-b from-red-400 to-orange-400  px-12 py-12">
                <p className="text-3xl font-bold pb-5">The Regular Plan</p>
                <p className="text-6xl font-bold pb-5">$35</p>
                <p className="pb-4">10 Visits per month</p>
                <p className="pb-4">Up to 2 hours</p>
                <p className="pb-4">words3</p>
                <button className="bg-white text-black py-4 w-full">Join Now</button>
            </div>
            </div>

            <div className=" bg-gray-500  px-12 py-12 w-80">
                <p className="text-3xl font-bold pb-5">The Premium Plan</p>
                <p className="text-6xl font-bold pb-5">$50</p>
                <p className="pb-4">Unlimited vists</p>
                <p className="pb-4">No time limits</p>
                <p className="pb-4">words3</p>
                <button className="bg-orange-500 py-4 w-full">Join Now</button>
            </div>

            
        </div>
        

            
        </div>
    )
}

export default Plans;