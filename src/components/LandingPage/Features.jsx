import React from 'react';
import Registration from '../../assets/Registration.png';
import Control from '../../assets/Control Panel.png';
import Female from '../../assets/Female Profile.png';
import Online from '../../assets/Online.png';
import Vector from '../../assets/ic_sharp-check.png';
import Frame191 from '../../assets/Frame 191.png';
import Email from '../../assets/email.png';

const Features = () => {
  return (
    <section className='w-full h-full bg-white flex flex-col items-center'>
   
    <div className='w-full lg:w-[840px] h-auto gap-4 lg:gap-8 flex flex-col items-center mt-16'>
      <div className='w-full text-center'>
        <h2 className='font-[Inter] font-bold text-[21px] lg:text-[40px] leading-[28px] lg:leading-[48px] text-[#2d2d2d]'>
          Our Features
        </h2>
        <p className='font-[Inter] font-medium text-sm lg:text-base leading-6 text-[#4e4e4e]'>
          E-MEDATT offers well refined Telehealth services that are available 24/7 with easy access to consultations,
          medical records, and appointment bookings. Below are some of our features:
        </p>
      </div>
  
      <div className='w-full lg:w-[840px] h-auto flex flex-col lg:flex-row lg:justify-between items-center gap-6 lg:gap-8'>
        <div className='w-full lg:w-[400px] h-[256px] rounded-lg border p-4 gap-4 border-[#5754ec] flex flex-col items-center'>
          <img src={Registration} alt="Registration image" />
          <h3 className='font-[Inter] font-bold text-[21px] lg:text-[24px] leading-8 text-[#2d2d2d]'>
            Registration and <br /> Authentication
          </h3>
          <p className='font-[Inter] font-medium text-sm lg:text-base leading-5 lg:leading-6 text-[#4e4e4e]'>
            We offer a smooth user registration process that takes minimal amount of time and effort.
          </p>
        </div>
  
        <div className='w-full lg:w-[400px] h-[256px] rounded-lg border p-4 gap-4 border-[#5754ec] flex flex-col items-center'>
          <img src={Control} alt="Control image" />
          <h3 className='font-[Inter] font-bold text-[21px] lg:text-[24px] leading-8 text-[#2d2d2d]'>
            Personalized Dashboard
          </h3>
          <p className='font-[Inter] font-medium text-sm lg:text-base leading-5 lg:leading-6 text-[#4e4e4e]'>
            Our dashboard is personalized for you with the focus of putting your health first.
          </p>
        </div>
      </div>
  
      <div className='w-full lg:w-[840px] h-auto flex flex-col lg:flex-row lg:justify-between items-center gap-6 lg:gap-8 mt-8'>
        <div className='w-full lg:w-[400px] h-[256px] rounded-lg border p-4 gap-4 border-[#5754ec] flex flex-col items-center'>
          <img src={Female} alt="Female image" />
          <h3 className='font-[Inter] font-bold text-[21px] lg:text-[24px] leading-8 text-[#2d2d2d]'>
            Profile Management
          </h3>
          <p className='font-[Inter] font-medium text-sm lg:text-base leading-5 lg:leading-6 text-[#4e4e4e]'>
            We provide personalized settings for our users to stay up to date regarding their health status.
          </p>
        </div>
  
        <div className='w-full lg:w-[400px] h-[256px] rounded-lg border p-4 gap-4 border-[#5754ec] flex flex-col items-center'>
  <img src={Online} alt="Online image" />
  <h3 className='font-[Inter] font-bold text-[18px] lg:text-[24px] leading-[24px] lg:leading-8 text-[#2d2d2d] text-center'>
    Consultation and Telehealth
  </h3>
  <p className='font-[Inter] font-medium text-sm lg:text-base leading-5 lg:leading-6 text-[#4e4e4e] text-center'>
    Connect with seasoned professionals from the <br className='lg:hidden' /> comfort of your location.
  </p>
</div>

      </div>
    </div>
  
   
    <div className='w-full lg:w-[1232px] h-auto mt-16 flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto'>
      <div className='w-full lg:w-[560px] h-auto flex flex-col items-center'>
        <p className='font-[Inter] font-bold text-[20px] leading-7 text-[#5754ec] text-center mb-4 lg:mr-[19rem]'>
          Your Healthcare Benefits
        </p>
        <h1 className='font-[Inter] font-bold text-[23px] lg:text-[48px] leading-[70px] text-[#2d2d2d] text-center lg:whitespace-normal'>
        Experience the Epitome of Quality Healthcare with E-MEDATT
        </h1>
       


        <div className='mt-8 flex flex-col lg:mr-[20rem] items-center space-y-4'>
          <div className='flex items-center gap-2 lg:mr-4'>
            <img src={Vector} alt="checkbox" />
            <p>No transportation cost</p>
          </div>
          <div className='flex items-center gap-2 lg:mr-4'>
            <img src={Vector} alt="checkbox" />
            <p>Quick medical access</p>
          </div>
          <div className='flex items-center gap-2 lg:mr-4'>
            <img src={Vector} alt="checkbox" />
            <p className='mr-4'>All round availability</p>
          </div>
          <div className='flex items-center gap-2 mr-[-2rem] lg:mr-[-1rem]'>
            <img src={Vector} alt="checkbox" />
            <p className='whitespace-nowrap'>Privacy and confidentiality</p>
          </div>
        </div>
      </div>

      <div className='w-full lg:w-[640px] h-auto'>
        <img src={Frame191} alt="A picture showing the hand of a doctor" className='w-full h-full object-cover' />
      </div>
    </div>
  
   
    <div className='w-full lg:w-[1104px] h-auto mt-16 flex flex-col lg:flex-row items-center gap-8'>
      <div className='w-full lg:w-[456px] h-auto'>
        <img src={Email} alt="3d marketing image" className='w-full h-full object-cover' />
      </div>
      <div className='w-full lg:w-[581px] h-auto py-8 px-2 flex flex-col items-center'>
        <h2 className='font-[Inter] font-bold text-[25px] lg:text-[40px] leading-[48px] text-[#4e4e4e] text-center mb-4'>
          Newsletter Subscription
        </h2>
        <p className='font-[Inter] font-medium text-sm lg:text-base leading-6 text-[#4e4e4e] text-center mb-6'>
          Keep up with our latest information and events. Subscribe to our <br /> newsletter.
        </p>
        <form action="#" className='flex flex-col items-center w-full lg:w-[485px] gap-6'>
          <input className='w-full h-[48px] border rounded border-[#868686] text-start outline-none px-4' type="text" name='name' id='name' placeholder='Name' />
          <input className='w-full h-[48px] border rounded border-[#868686] text-start outline-none px-4' type="email" name="email" id="email" placeholder='E-mail address' />
          <input className='w-[112px] h-[40px] rounded-lg border-0 py-2 px-4 font-[Inter] font-bold text-base text-[#ffffff] bg-[#3b54fa] cursor-pointer' type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </section>
  
  )
}

export default Features;