// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarCheck, faCog } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#3B54FA] text-white flex justify-around py-4">
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faHome} size="2x" />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
        <span>Appointments</span>
      </div>
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faCog} size="2x" />
        <span>Settings</span>
      </div>
    </footer>
  );
}

export default Footer;