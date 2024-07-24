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
    <section>

        <div>
        <div>
        <img src={Logo} alt="logo" />
        <h1>E-MEDATT</h1>
        </div>

        <div>
            <h3>Our Company</h3>
            <a href="#">About us</a>
            <a href="#">Partners</a>
            <a href="#">Articles</a>
            <a href="#">Contact us</a>
            <a href="#">Privacy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Disclaimer</a>
        </div>

        <div>
            <h3>Services</h3>
            <a href="#">Consultation</a>
            <a href="#">Telehealth</a>
            <a href="#">Nutrition</a>
            <a href="#">Therapy</a>
            <a href="#">Health and Fitness</a>
        </div>

        <div>
            <h3>Our Socials</h3>

            <div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={FB} alt="facebook logo" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="twitter logo" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={IG} alt="instagram logo" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={YT} alt="youtube logo" /></a>
            </div>
        </div>

        <div>
        <a className='w-[70%] h-[60px] lg:w-full lg:h-full' href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={googlePic} alt="google"/>
        </a>
        <a className='w-[70%] h-[60px] lg:w-full lg:h-full' href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={applePic} alt="apple" />
        </a>
        </div>
        </div>

        <div>
            <p>Copyright © Emedatt 2024</p>
        </div>
     
    </section>
  )
}

export default Footer;