

function Programs({refProgram}) {

    return (
        <div className="flex flex-col items-center justify-center " ref={refProgram}>

                <div className="flex flex-col font-bold text-4xl py-8 text-center">
                    <i>
                <p>EXPLORE OUR</p>
                <p className="font-outline-white">MOST POPULAR</p>
                <p>PROGRAMES</p></i>
                </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-lg ">

        <div className=" bg-gray-500 px-6 py-8">
                <p className="text-3xl font-bold pb-5">Cardio</p>
                <p className="pb-4">In this program, you will work to improve your fitness through many exercises.</p>
                <a href="#">See more</a>
            </div>

            <div className=" bg-gray-500 px-6 py-8">
                <p className="text-3xl font-bold pb-5">Strength</p>
                <p className="pb-4">In this program, your focus will be on improving your strength through exercises.</p>
                <a href="#">See more</a>
            </div>

            <div className=" bg-gray-500 px-6 py-8">
                <p className="text-3xl font-bold pb-5">Mobility</p>
                <p className="pb-4">The mobility program, is focused on increasing your flexibility and range of movement.</p>
                <a href="#">See more</a>
            </div>

            <div className=" bg-gray-500 px-6 py-8">
                <p className="text-3xl font-bold pb-5">Custom</p>
                <p className="pb-4 ">Work with one of our specialist trainers to make a program customised to your needs.</p>
                <a href="#">See more</a>
            </div>
        </div>
        

            
        </div>
    )
}

export default Programs;