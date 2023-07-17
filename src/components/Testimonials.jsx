import HeroImage from '../assets/hero.png'

function Testimonials({refTest}) {

    return (
       
      <div className="flex flex-col w-full h-full " ref={refTest}>

        <div className="flex flex-row font-bold text-4xl py-16 text-center justify-center">
                          <i>
                          <p>WHAT DO</p>
                          <p className="font-outline-white">OUR MEMBERS</p>
                          <p>THINK?</p></i>
        </div>

        <div className="w-full h-full flex flex-row text-lg pb-48">
            
              <div className="flex flex-wrap w-full justify-center sm:justify-between gap-4 ">
                  <div className="flex flex-col h-[80%] w-1/2  justify-center px-4 ">
                  <p className="text-3xl font-bold pb-5">I love what The Gym offers, they have amazing programs and coaches!</p>

                  <div className="flex flex-row gap-2 justify-end">
                    <p className="pb-4 text-orange-500">Josh Smith</p>
                    <p className="pb-4">- Accountant</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <button className=" text-3xl hover:text-4xl w-1/2 "> <i class="fa-solid fa-arrow-left"></i> </button>
                    <button className=" text-3xl hover:text-4xl w-1/2 "> <i class="fa-solid fa-arrow-right"></i></button>
                  </div>
              </div>
      

              <div className="flex relative">
                <div className="flex border-gray-500 border-2 absolute w-17 h-20 right-9 bottom-8 px-32 py-40"></div>
                <div className="flex bg-gradient-to-b from-red-500 to-orange-400 absolute w-17 h-20 left-9 top-8 px-32 py-40"></div>
                <img className="w-64 h-82 object-cover relative absolute" src="https://images.unsplash.com/photo-1530777780045-c11965d8f4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80/" />
                  
                

              </div>
            </div>

            
        </div>
       
        <div className="flex flex-col font-bold text-2xl sm:text-4xl md:text-6xl ">
                       
                          <div className="flex flex-row gap-4">
                          <p>READY TO </p>
                          <p className="font-outline-white"> JOIN </p> 
                          <p>YET?</p>
                          </div>
                          
                          <div className="flex flex-row gap-4">
                          <p className="font-outline-white">WHAT ARE</p>
                          <p>YOU</p>
                          <p className="font-outline-white">WAITING FOR?</p>
                          </div>

                          <div className="flex justify-center py-8">
                            <button className="bg-orange-500 w-1/3 lg:w-1/6 text-2xl py-6 sm:px-6 text-center text-white">JOIN NOW</button>
                          </div>
        </div>
        
      </div>
            
   
    )
}

export default Testimonials;