import React, { useState } from 'react';
import PhHeartbeat from '../../assets/ph_heartbeat-duotone.png';
import Frame86 from '../../assets/Frame 86.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaApple } from 'react-icons/fa';
import GoogleLogo from '../../assets/Tech Logos/Google.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Email validation
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Email address is invalid';
    }

    // Password validation
    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      validationErrors.password = 'Password must be at least 8 characters long, contain at least one letter and one number';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form is valid');
      // Perform login logic here
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <div className='hidden lg:flex w-[171px] left-[64px] gap-[4px] justify-center items-center ml-[-70rem] mt-[2rem]'>
        <img className='w-[40px] h-[40px]' src={PhHeartbeat} alt="logo" />
        <h1 className='font-Inter text-2xl font-bold leading-8 text-[#3b54fa]'>E-MEDATT</h1>
      </div>

      <div className=' w-full h-full flex flex-col lg:flex-row justify-center items-center mt-[-6rem]'>
      <h1 className='lg:hidden font-Inter font-bold text-xl sm:text-2xl md:text-2xl leading-8 sm:leading-10 md:leading-10 items-center text-[#2d2d2d] mx-auto'>Log in</h1>
      <div className='flex justify-center lg:block'>
    <img className='sm:w-[250px] sm:h-[200px] md:w-[312px] md:h-[240px] lg:w-[600px] lg:h-[440px]' src={Frame86} alt="female doctor" />
  </div>


  <div className='sm:w-[350px] sm:h-[300px] md:w-[400px] md:h-[350px] lg:w-[533px] lg:h-[442px] p-4 sm:p-6 md:p-8 gap-4 sm:gap-2 md:gap-3 rounded-lg border border-transparent lg:border-gray-400 lg:ml-4 flex flex-col'>
  <h1 className='hidden md:block font-Inter font-bold text-xl sm:text-2xl md:text-2xl leading-8 sm:leading-10 md:leading-10 items-center text-[#2d2d2d] mx-auto'>Log in</h1>


    <form onSubmit={handleLoginSubmit}>
      <div className='flex flex-col w-full sm:w-[300px] md:w-[350px] lg:w-[485px] h-[64px] sm:h-[70px] md:h-[74px] gap-[4px]'>
        <label className='font-Inter font-medium text-sm leading-5 text-[#4e4e4e]' htmlFor="email">Email</label>
        <input
          className='w-full h-[40px] sm:h-[44px] md:h-[48px] rounded border-2 p-2 gap-[10px] text-[#868686] outline-none'
          type="text"
          placeholder='Enter e-mail address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
      </div> 

      <div className='flex flex-col w-full sm:w-[300px] md:w-[350px] lg:w-[485px] h-[84px] sm:h-[94px] md:h-[104px] mt-2 gap-[8px]'>
        <label className='font-Inter font-medium text-sm leading-5 text-[#4e4e4e]' htmlFor="password">Password</label>
        <input
          className='w-full h-[40px] sm:h-[44px] md:h-[48px] rounded border-2 p-2 gap-[10px] text-[#868686] outline-none'
          type="password"
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
      </div>

      <div className='flex justify-end'>
        <Link to="/ForgotPassword" className='font-Inter font-medium text-sm leading-5 text-[#4e4e4e]'>Forgot password</Link>
      </div>

      <div className='flex justify-center items-center mx-auto mt-6 sm:mt-7 md:mt-9'>
      <button className='w-full sm:w-[312px] md:w-[360px] lg:w-[485px] h-[48px] sm:h-[48px] md:h-[52px] lg:h-[56px] rounded-lg border p-2 gap-[10px] bg-[#3b54fa] text-white'>
      Log in
    </button>

      </div>

      <div className='w-[314px] h-[24px] flex justify-center items-center mx-auto mt-2 sm:mt-2 md:mt-3'>
        <p className='font-Inter font-normal text-base leading-6 text-[#4e4e4e]'>Don't have an account yet? <a className='font-Inter font-medium text-base leading-6 text-[#5754ec] underline' href="Signup" target='_blank'>Sign up here!</a></p>
      </div>
    </form>

    <div className='w-full max-w-md gap-4 flex flex-col items-center mt-8'>
    <button className='w-full sm:w-[312px] md:w-[360px] lg:w-[485px] h-[44px] sm:h-[48px] md:h-[52px] lg:h-[56px] flex items-center justify-center gap-4 py-2 px-4 rounded-lg bg-white text-black text-base sm:text-sm font-normal leading-6 [letter-spacing:-0.02em] border-2'>
        <img className='w-[27px]' src={GoogleLogo} alt="google logo" /> Login with Google
      </button>

      <button className='w-full sm:w-[312px] md:w-[360px] lg:w-[485px] h-[44px] sm:h-[48px] md:h-[52px] lg:h-[56px] flex items-center justify-center gap-4 py-2 px-4 rounded-lg bg-white text-black text-base sm:text-sm font-normal leading-6 [letter-spacing:-0.02em] border-2'>
        <FaApple style={{ fontSize: '20px' }} /> Login with Apple
      </button>
    </div>
  </div>


</div>


      <div className='hidden w-[1200px] h-[19px] gap-[384px] lg:flex justify-center items-center mt-8'>
        <div className='w-[159px] h-[19px]'>
          <p className='font-Inter text-[#141522] text-xs leading-[14.52px] tracking-[-1%] text-nowrap'>Copyright © Emedatt 2024</p>
        </div>
         
        <div className="flex items-center w-[155px] h-[19px] gap-[18px]">
          <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ fontSize: '16.85px' }} />
          </a>
          <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ fontSize: '16.85px' }} />
          </a>
          <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ fontSize: '16.85px' }} />
          </a>
          <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://www.youtube.com/example" target="_blank" rel="noopener noreferrer">
            <FaYoutube style={{ fontSize: '16.85px' }} />
          </a>
          <a className='font-normal text-[16.85px] leading-[19.38px] text-[#222222]' href="https://www.linkedin.com/example" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: '16.85px' }} />
          </a>
        </div>

        <div className='w-[117px] h-[11px]'>
          <p className='tracking-[-1%] text-[#263238] font-normal text-[12px] leading-[14.52px]'>Terms and condition</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
