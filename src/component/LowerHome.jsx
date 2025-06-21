import React from 'react'
import logo from '../../public/images/image.png'
import logo1 from '../../public/images/images1.png'
import logo2 from '../../public/images/images2.png'
import logo3 from '../../public/images/images3.png'

function LowerHome() {
  return (

    <>
   <div className='flex flex-col gap-1'>
    
   <div className='flex justify-center mt-12'>
        <img className='lg:h-[1400px] lg:w-[1000px] h-[549px] w-[370px] rounded-3xl' src={logo} alt="main-image" />
    </div>
    <div className='flex justify-center mt-12'>
        <img className='lg:h-[1400px] lg:w-[1000px]  h-[549px] w-[370px] rounded-3xl' src={logo1} alt="second-image" />
    </div>
    <div className='flex justify-center mt-12'>
        <img className='lg:h-[1400px] lg:w-[1000px]  h-[549px] w-[370px] rounded-3xl' src={logo2} alt="second-image" />
    </div>
    <div className='flex justify-center mt-12'>
        <img className='lg:h-[1400px] lg:w-[1000px]  h-[549px] w-[370px] rounded-3xl' src={logo3} alt="second-image" />
    </div>
   </div>
   
    </>
   
    
  )
}

export default LowerHome