import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import userImage from '../../assets/alpha.jpeg';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 ">
      <div>
        <h1 className="text-4xl font-inter font-bold">Hi John,</h1>
        <p className="text-gray-600 mt-2 font-inter font-semibold">Your health, our priority!</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="text-black-300 text-2xl" />
          <span className="absolute -top-2 -right-2 bg-black-300 text-white text-xs rounded-full px-1">1</span>
        </div>
        <img src={userImage} alt="User" className="w-10 h-10 rounded-full object-cover ml-4" />
      </div>
    </header>
    
  )
}

export default Header;