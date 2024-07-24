import React from 'react'
import Frame114 from '../../assets/Frame 114.png';

const Mission = () => {
  return (
    <section className='w-full h-auto gap-[10px] bg-[#3b54fa] py-8'>
    <div className='w-full max-w-[1312px] h-auto flex flex-col lg:flex-row lg:justify-between items-center mx-auto px-4 lg:px-0'>
      <div className='w-full lg:w-[644px] h-auto lg:h-[144px] gap-[16px] mt-12 lg:mt-0'>
        <h2 className='font-[Inter] font-bold lg:text-[48px] text-[21px] leading-[40px] md:leading-[48px] lg:leading-[56px] mb-4 text-[#ffffff]'>
          Why E-MEDATT?
        </h2>
        <p className='font-[Inter] font-medium text-sm md:text-base leading-5 md:leading-6 text-[#f6f6f6]'>
          We provide instant access to quality healthcare services and seasoned
          <br className='hidden md:inline' /> professionals across the medical fields around the world. Our system is refined
          <br className='hidden md:inline' /> to keep your health in check while maintaining a high level of privacy.
        </p>
      </div>
  
      <div className='mt-8 lg:mt-0 w-full lg:w-[644px]'>
        <img className='w-full h-auto lg:w-[644px] lg:h-[400px]' src={Frame114} alt="A picture of a doctor and a patient" />
      </div>
    </div>
  </section>
  
  )
}

export default Mission;