import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required');
    } else if (!emailRegex.test(email)) {
      setError('Email address is invalid');
    } else {
      setError('');
      console.log('Forgot Password form is valid');
      // Perform forgot password logic here
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='w-[533px] h-[200px] p-8 pb-8 pr-6 gap-8 rounded-lg border border-gray-400 flex flex-col'>
        <h1 className='font-Inter font-bold text-2xl leading-10 items-center text-[#2d2d2d] mx-auto'>Forgot Password</h1>

        <form onSubmit={handleForgotPasswordSubmit}>
          <div className='flex flex-col w-[485px] h-[74px] gap-[4px]'>
            <label className='font-Inter font-medium text-sm leading-5 text-[#4e4e4e]' htmlFor="email">Email</label>
            <input
              className='w-[485px] h-[48px] rounded border-2 p-2 gap-[10px] text-[#868686] outline-none'
              type="text"
              placeholder='Enter e-mail address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <span className='text-red-500 text-sm'>{error}</span>}
          </div>

          <div className='flex justify-center items-center mx-auto mt-9'>
            <button className='w-[485px] h-[48px] rounded-lg border p-2 gap-[10px] bg-[#3b54fa] text-white'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
