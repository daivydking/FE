import React from 'react';
import Frame107 from '../../assets/Frame 107.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import applePic from '../../assets/appleDownload 1.png';
import googlePic from '../../assets/googleDownload 1.png';

const Hero = () => {
  return (
    <section
    className="w-full h-[640px] bg-no-repeat bg-center bg-cover flex items-center justify-center"
    style={{
      backgroundImage: `linear-gradient(rgba(45, 45, 45, 0.6), rgba(45, 45, 45, 0.6)), url(${Frame107})`,
    }}
  >
    <div className="w-[90%] max-w-[657px] h-auto gap-[48px] flex flex-col items-center lg:mr-[45rem]">
      <h1 className="font-[Inter] lg:text-[48px] text-[21px] text-[#ffffff] font-bold leading-tight md:leading-[70px] text-center lg:mr-[-0.9rem] sm:mr-0">
        Quality Healthcare Services
      </h1>
      <h1 className="text-center font-[Inter] font-bold text-[#ffffff] text-[21px] whitespace-nowrap lg:whitespace-normal lg:text-[48px] md:leading-[70px] mt-[-2rem] lg:mr-14 sm:mr-0">
      24/7 without limitations!
     </h1>

      <p className="whitespace-normal text-center font-bold lg:break-words font-[Inter] lg:font-bold lg:text-sm text-base leading-6 text-[#ffffff] lg:mt-[-1rem]">
      Get instant access to Medical Professionals across diverse fields with the click of a button.
      </p>


<div className="flex justify-center lg:justify-start lg:mr-[24rem]">
  <button className="flex items-center whitespace-nowrap bg-[#3b54fa]  lg:w-[242px] h-[40px] px-4 py-2 border-0 gap-2 rounded text-[#ffffff] font-[Inter] font-bold text-base leading-6">
    Book an Appointment <AiOutlineArrowRight className='text-[#ffffff]' size={20} />
  </button>
</div>


      <div className="flex justify-center items-center gap-4 mt-4 w-[200px] md:w-[433px] h-[40px] md:h-[80px] mx-auto lg:mr-[13rem]">
        <a className='w-[70%] h-[60px] lg:w-full lg:h-full' href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={googlePic} alt="google"/>
        </a>
        <a className='w-[70%] h-[60px] lg:w-full lg:h-full' href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={applePic} alt="apple" />
        </a>
      </div>
    </div>
  </section>
  
  )
}

export default Hero