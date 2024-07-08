import React from 'react';
import PhHeartbeat from '../../assets/ph_heartbeat-duotone.png';
import Frame86 from '../../assets/Frame 86.png';

const Login = () => {
  return (
    <div className='w-full h-full flex flex-col items-center top-8'>
       <div className='w-[171px] left-[64px] gap-[4px] flex justify-center items-center ml-[-70rem] mt-[2rem]'>
        <img className='w-[40px] h-[40px]' src={PhHeartbeat} alt="logo" />
        <h1 className='font-Inter text-2xl font-bold leading-8 text-[#3b54fa] '>E-MEDATT</h1>
    </div>

    <div className='w-full h-full flex justify-center items-center mt-32'>
      <img className='w-[600px] h-[440px]' src={Frame86} alt="female doctor" />

      <div className='w-[533px] h-[442px] p-8 pb-8 pr-6 gap-8 rounded-tl-lg border-t border-opacity-0 flex flex-col'>
        <h1 className='font-Inter font-bold text-2xl leading-10 items-center text-[#2d2d2d] mx-auto'>Log in</h1>
       
      </div>
    </div>

    <div>
        <h1>mirror</h1>
    </div>
    </div>


  
  )
}

export default Login