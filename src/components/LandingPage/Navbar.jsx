import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUp, AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDropdown = (setDropdownState) => {
    setDropdownState(prevState => !prevState);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 w-full h-full px-4 sm:px-16 border-b-2 flex justify-between items-center bg-white">
      <div className="flex items-center">
        <img src={Logo} alt="E-medatt logo" className="w-[40px] h-[40px] m-0 p-0" />
        <h1 className="font-[Inter] text-base sm:text-3xl font-bold leading-36 text-[#3B54FA] mr-4 m-0 p-0 whitespace-nowrap">
          E-MEDATT
        </h1>
      </div>

      <div className='hidden md:flex ml-[9rem]'>
        <div className="hidden md:flex mx-auto md:ml-6 md:space-x-8 w-[508px] h-[24px] gap-[10px] items-center mt-2">
          <div className="relative">
            <button
              onClick={() => toggleDropdown(setIsServicesOpen)}
              className="inline-flex font-[Inter] items-center px-3 py-2 rounded-md leading-8 font-bold text-base text-[#4e4e4e] hover:text-gray-900 focus:outline-none"
            >
              Services
              {isServicesOpen ? <AiOutlineUp className="ml-2" /> : <AiOutlineDown className="ml-2" />}
            </button>
            {isServicesOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-700 z-10">
                <div className="py-1">
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">General Consultation</a>
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Emergency Services</a>
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Surgical Services</a>
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Diagnostic Services</a>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown(setIsNutritionOpen)}
              className="inline-flex font-[Inter] items-center px-3 py-2 rounded-md leading-8 font-bold text-base text-[#4e4e4e] hover:text-gray-900 focus:outline-none"
            >
              Nutrition
              {isNutritionOpen ? <AiOutlineUp className="ml-2" /> : <AiOutlineDown className="ml-2" />}
            </button>
            {isNutritionOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-300 z-10">
                <div className="py-1">
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Diet Plans</a>
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Nutritional Counseling</a>
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Special Diets</a>
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Healthy Eating Tips</a>
                </div>
              </div>
            )}
          </div>

          <div className='relative'>
            <a className='leading-8 font-bold text-base text-[#4e4e4e] hover:text-gray-900 font-[Inter]' href="#">Partners</a>
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown(setIsArticlesOpen)}
              className="inline-flex font-[Inter] items-center px-3 py-2 rounded-md leading-8 font-bold text-base text-[#4e4e4e] hover:text-gray-900 focus:outline-none"
            >
              Articles
              {isArticlesOpen ? <AiOutlineUp className="ml-2" /> : <AiOutlineDown className="ml-2" />}
            </button>
            {isArticlesOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-700 z-10">
                <div className="py-1">
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Health News</a>
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Wellness Tips</a>
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Patient Stories</a>
                  <a href="#" className="block font-[Inter] px-4 py-2 text-sm text-[#4e4e4e] hover:bg-gray-100">Disease Information</a>
                </div>
              </div>
            )}
          </div>

          <div className='relative'>
            <a className='leading-8 font-bold text-base text-[#4e4e4e] hover:text-gray-900 font-[Inter] text-nowrap' href="#">About us</a>
          </div>
        </div>

        <div className="flex items-center mx-36 space-x-6">
          <div className="relative hidden md:block ml-7">
            <input
              type="text"
              className="block w-[233px] h-[34px] pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 text-[#868686] bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AiOutlineSearch className="text-[#868686]" />
            </div>
          </div>

          <div className='md:block hidden w-[187px] h-[40px] gap-[16px] lg:flex justify-center items-center'>
            <Link to="/Login" className='w-[79px] h-[40px] rounded-lg border gap-[8px] text-[#3b54fa] bg-[#ffffff] px-4 py-2 text-nowrap cursor-pointer'>Log in</Link>
            <Link to="/Signup" className='w-[92px] h-[40px] rounded-lg border gap-[8px] bg-[#3b54fa] text-[#ffffff] px-4 py-2 cursor-pointer text-nowrap'>Sign Up</Link>
          </div>
        </div>
      </div>

      {/*mobile screens*/}

      <div onClick={handleNav} className='block md:hidden ml-auto'>
        {nav ? <AiOutlineClose size={30} className='text-black' /> : <AiOutlineMenu size={30} className='text-black' />}
      </div>

      <div className={nav ? 'fixed right-0 z-20 w-full h-full bg-white/70 backdrop-blur-lg gap-[32px] text-black top-[65px] left-0 flex flex-col items-center text-center transition-all duration-500 ease-in-out' : 'absolute left-[-100%]'}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center w-full">
          <div className="relative my-2">
            <button
              onClick={() => toggleDropdown(setIsServicesOpen)}
              className="inline-flex items-center px-3 py-2 text-[#4e4e4e] font-bold text-sm"
            >
              Services
              {isServicesOpen ? <AiOutlineUp className="ml-2 mt-1"  /> : <AiOutlineDown className="ml-2 mt-1" />}
            </button>
            {isServicesOpen && (
              <div className="mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-300">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">General Consultation</a>
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Emergency Services</a>
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Surgical Services</a>
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Diagnostic Services</a>
                </div>
              </div>
            )}
          </div>

          <div className="relative my-2">
            <button
              onClick={() => toggleDropdown(setIsNutritionOpen)}
              className="inline-flex items-center px-3 py-2 text-[#4e4e4e] font-bold text-sm"
            >
              Nutrition
              {isNutritionOpen ? <AiOutlineUp className="ml-2 mt-1" /> : <AiOutlineDown className="ml-2 mt-1" />}
            </button>
            {isNutritionOpen && (
              <div className="mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-300">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Diet Plans</a>
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Nutritional Counseling</a>
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Special Diets</a>
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Healthy Eating Tips</a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="px-3 py-2 text-[#4e4e4e] items-center font-bold text-sm my-2 ml-[-1rem]">Partners</a>

          <div className="relative my-2">
            <button
              onClick={() => toggleDropdown(setIsArticlesOpen)}
              className="inline-flex items-center px-3 py-2 text-[#4e4e4e] font-bold text-sm"
            >
              Articles
              {isArticlesOpen ? <AiOutlineUp className="ml-2 mt-1" /> : <AiOutlineDown className="ml-2 mt-1" />}
            </button>
            {isArticlesOpen && (
              <div className="mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-300">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Health News</a>
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Wellness Tips</a>
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Patient Stories</a>
                  <a href="#" className="block px-4 py-2 text-sm text-[#4e4e4e]">Disease Information</a>
                </div>
              </div>
            )}
          </div>

         
          <a href="#" className="px-3 py-2 items-center text-[#4e4e4e] font-bold text-sm my-2 ml-[-1rem]">About Us</a>

          <div className="relative my-2">
            <input
              type="text"
              className="block w-[233px] h-[34px] pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 mb-4 text-[#868686] bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AiOutlineSearch className="text-[#868686] mt-[-1rem]" />
            </div>
          </div>

          <div className='flex flex-col w-[187px] h-[40px] gap-[16px] items-center my-2 '>
            <Link to="/Login" className='w-[79px] h-[40px] rounded-lg border gap-[8px] text-[#3b54fa] bg-[#ffffff] px-4 py-2 cursor-pointer whitespace-nowrap mt-1'>Log in</Link>
            <Link to="/Signup" className='w-[92px] h-[40px] rounded-lg border-none gap-[8px] bg-[#3b54fa] text-[#ffffff] px-4 py-2 cursor-pointer whitespace-nowrap'>Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
