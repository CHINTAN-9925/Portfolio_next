import React from 'react'

const Main = () => {
    return (
        <>
            <div id='main' className='flex flex-col md:flex-row font-martian h-[80vh] mt-[100px] '>
                <div className="flex-1 justify-center items-center m-6 p-4 font-bold text-6xl animate-fadeInGrow">
                    HI I'AM CHINTAN <span className=" text-red-900">FULL STACK </span> DEVELOPER BASED IN INDIA.
                </div>
                <div className="flex flex-1 justify-center items-center text-main_text_color font-bold text-5xl animate-fadeInGrow">
                    {/* image                 */}
                </div>
            </div>
        </>
    )
}

export default Main