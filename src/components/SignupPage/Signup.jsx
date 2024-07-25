
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faApple, faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import GoogleLogo from '../../assets/Tech Logos/Google.jpg';
import PhHeartbeat from '../../assets/ph_heartbeat-duotone.png';
import Frame86 from '../../assets/Frame 86.png';
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isPatient, setIsPatient] = useState(true);
  const [isPractitioner, setIsPractitioner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isPractitioner: false,
    isPatient: true,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here if needed

    // Redirect to OTP page upon successful sign-up
    navigate('/OTP');
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col justify-center items-center py-14 px-4 sm:px-6 lg:px-8">

     
      <div className="flex w-full justify-start mb-8 pl-8 mt-[-14px]">
      <Link to="/" className='flex justify-between items-center'>
        <img src={PhHeartbeat} alt="E-MEDATT Logo" className="w-[35px] h-[35px] mt-[-0.2rem]" />
        <h1 className="font-inter text-2xl font-bold leading-8 text-[#3b54fa] mr-[rem]">E-MEDATT</h1>
        </Link>
       
      </div>

    
    
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-center items-center rounded-lg  overflow-hidden bg-white">
        <div className="hidden md:flex justify-center items-start w-full md:w-1/2">
          <img
            src={Frame86}
            alt="Sign Up"
            className="w-full object-cover rounded-lg h-full"
            style={{ maxHeight: '650px', objectFit: 'cover' }}
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-inter font-semibold text-center text-[#000000]">Sign up</h2>
          <p className="mt-2 text-center font-medium font-inter leading-5 text-[#000000]"> Already have an account? <Link to="/Login" className="text-blue-500 font-inter">Login</Link></p>
          <div className="mt-6">
            <p className="text-center font-inter text-lg font-medium text-[#000000]"> You are a (Please tick the appropriate box)</p>
            <div className="space-x-8 flex mt-4 justify-between">
              <label
                className={`flex items-center w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md cursor-pointer ${isPractitioner ? 'bg-gray-100 text-black' : ''
                  } ${isPatient ? 'cursor-not-allowed opacity-50' : ''}`}
              >
                <input
                  type="radio"
                  className="w-3 h-4 text-blue-600 bg-[#AEAEAE] border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                  checked={isPractitioner}
                  onChange={() => {
                    setIsPractitioner(true);
                    setIsPatient(false);
                  }}
                />
                <span className="ml-2 text-[16px]">
                 Practitioner
                </span>
              </label>
              <label
                className={`flex items-center w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md cursor-pointer ${!isPatient ? 'bg-gray-100 text-black' : ''
                  } ${isPractitioner ? 'cursor-not-allowed opacity-50' : ''}`}
              >
                <input
                  type="radio"
                  className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                  checked={isPatient}
                  onChange={() => {
                    setIsPatient(true);
                    setIsPractitioner(false);
                  }}
                />
                <span className="ml-2 text-[16px]">
                 Patient
                </span>
              </label>
            </div>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="font-inter block text-sm font-medium text-[#2D2D2D]"> First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="font-inter block text-sm font-medium text-[#2D2D2D]">Last Name </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="font-inter block text-sm font-medium text-[#2D2D2D]">Email </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="font-inter block text-sm font-medium text-[#2D2D2D]">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute right-3 top-9 text-gray-500 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="font-inter block text-sm font-medium text-[#2D2D2D]">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="absolute right-3 top-9 text-gray-500 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3B54FA] text-white py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
            <div className="flex items-center justify-center my-4">
              <hr className="w-full border-gray-300" />
              <span className="mx-4 text-gray-500">OR</span>
              <hr className="w-full border-gray-300" />
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-md  hover:bg-gray-50 mt-4"
            >
              <img src={GoogleLogo} alt="Google Logo" className="w-8 h-8 mr-2" />
              Sign up with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-md  hover:bg-gray-50 mt-4"
            >
              <FontAwesomeIcon icon={faApple} className="text-gray-600 mr-2 w-8 h-8" /> Sign up with Apple
            </button>
          </form>
        </div>
      </div>
      <footer className="w-[1200px] h-[19px] gap-[384px] lg:flex justify-center items-center text-center text-gray-500 mt-10">
        <div className="w-[159px] h-[19px]">
          <p className="font-Inter text-[#141522] text-xs leading-[14.52px] tracking-[-1%] text-nowrap">
            Copyright © Emedatt 2024
          </p>
        </div>

        <div className="flex item-center w-[155px] h-[19px] gap-[18px]">
          <a
            className="font-normal text-[16.85px] leading-[19.38px] text-[#222222]"
            href="https://facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faFacebook} />
          </a>
          <a
            className="font-normal text-[16.85px] leading-[19.38px] text-[#222222]"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faTwitter} />
          </a>
          <a
            className="font-normal text-[16.85px] leading-[19.38px] text-[#222222]"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faInstagram} />
          </a>
          <a
            className="font-normal text-[16.85px] leading-[19.38px] text-[#222222]"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faYoutube} />
          </a>
          <a
            className="font-normal text-[16.85px] leading-[19.38px] text-[#222222]"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon style={{ fontSize: '16.85px' }} icon={faLinkedin} />
          </a>
        </div>
        <div className="w-[117px] h-[11px]">
          <p className="tracking-[-1%] text-[#263238] font-normal text-[12px] leading-[14.52px]">
            Terms and condition
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
