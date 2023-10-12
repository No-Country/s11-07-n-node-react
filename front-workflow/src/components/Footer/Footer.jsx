import React from 'react';
import house from '../../assets/house.png';
import message from '../../assets/message.png';
import profile1 from '../../assets/profile1.png';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[60px] bg-verdeMarino flex justify-between items-center p-4">
      <button className="flex items-center transform transition-transform hover:scale-150 hover:-translate-y-4">
        <div className="bg-verdeMarino w-12 h-12 p-2 rounded-full">
          <img src={house} alt="House" className="w-full h-full" />
        </div>
      </button>
      <button className="flex items-center transform transition-transform hover:scale-150 hover:-translate-y-4">
        <div className="bg-verdeMarino w-12 h-12 p-2 rounded-full">
          <img src={message} alt="Message" className="w-full h-full" />
        </div>
      </button>
      <button className="flex items-center transform transition-transform hover:scale-150 hover:-translate-y-4">
        <div className="bg-verdeMarino w-12 h-12 p-2 rounded-full">
          <img src={profile1} alt="Profile" className="w-full h-full" />
        </div>
      </button>
    </div>
  );
};

export default Footer;