import React from 'react';
import Logo from '../../assets/logo.png';
import FB from '../../assets/logos_facebook.png';
import Twitter from '../../assets/skill-icons_twitter.png';
import IG from '../../assets/skill-icons_instagram.png';
import YT from '../../assets/logos_youtube-icon.png';
import applePic from '../../assets/appleDownload 1.png';
import googlePic from '../../assets/googleDownload 1.png';

const Footer = () => {
  return (
    <section className='w-full h-auto bg-[#5754ec] py-8 sm:py-16'>
    <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 px-4'>
      
      <div className='flex flex-col items-start'>
        <div className='flex items-center mb-8 md:mb-0'>
          <img className='w-10 h-10' src={Logo} alt="logo" />
          <h1 className='font-[Inter] font-bold text-2xl leading-8 text-[#ffffff]'>E-MEDATT</h1>
        </div>
      </div>
  
      <div className='flex flex-col items-start'>
        <h3 className='font-[Inter] font-bold text-xl leading-7 text-[#ffffff] mb-4'>Our Company</h3>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">About us</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Partners</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Articles</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Contact us</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Privacy</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Terms and Conditions</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Disclaimer</a>
      </div>
  
      <div className='flex flex-col items-start'>
        <h3 className='font-[Inter] font-bold text-xl leading-7 text-[#ffffff] mb-4'>Services</h3>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Consultation</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Telehealth</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Nutrition</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Therapy</a>
        <a className='font-[Inter] font-medium text-base leading-6 text-[#f6f6f6] mb-2' href="#">Health and Fitness</a>
      </div>
  
      <div className='flex flex-col items-start'>
        <h3 className='font-[Inter] font-bold text-xl leading-7 text-[#ffffff] mb-4'>Our Socials</h3>
        <div className='flex space-x-4 mb-4'>
          <a className='w-6 h-6' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={FB} alt="facebook logo" /></a>
          <a className='w-6 h-6' href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="twitter logo" /></a>
          <a className='w-6 h-6' href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={IG} alt="instagram logo" /></a>
          <a className='w-6 h-6' href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={YT} alt="youtube logo" /></a>
        </div>

        <div className='flex space-x-4'>
          <a className='w-24 h-12' href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src={googlePic} alt="google"/>
          </a>
          <a className='w-24 h-12' href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={applePic} alt="apple" />
          </a>
        </div>
      </div>      
  
    </div>
  
    <div className='w-full text-center mt-8'>
      <p className='font-[Inter] font-normal text-sm leading-tight text-[#ffffff] tracking-minus-1'>Copyright © Emedatt 2024</p>
    </div>
  </section>
  
  )
}

export default Footer;