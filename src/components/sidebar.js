import React, { useState } from 'react';
import { FaPercent, FaPhone, FaCalculator } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
 

  return (
    <div className="relative z-50 flex flex-col items-end mx-auto bg-white select-none  max-w-screen-2xl">
      <div className="fixed flex flex-col space-y-1 text-green-800 transform -translate-y-1/2 md:space-y-2 top-1/2 ">
        <Link
          to="/interestrate"
          className='p-1 text-white transition duration-300 ease-in-out delay-150 bg-green-800 md:p-2 rounded-l-2xl hover:-translate-y-1 hover:scale-110 hover:bg-green-500'
        >
          
          <div className="flex text-white rounded-l-2xl ">
            <FaPercent size={16} className="md:mx-1" /> 
          </div>
        </Link>

        <Link
          to="/contact"
          className='p-1 text-white transition duration-300 ease-in-out delay-150 bg-green-800 rounded-l-2xl hover:-translate-y-1 hover:scale-110 hover:bg-green-500'
            
        >
          <div className="flex text-white rounded-l-2xl ">
            <FaPhone size={16} className="md:mx-1 "  />
          </div>
        </Link>

        <Link
          to="/emicalculator"
          className='p-1 text-white transition duration-300 ease-in-out delay-150 bg-green-800 md:p-2 rounded-l-2xl hover:-translate-y-1 hover:scale-110 hover:bg-green-500'
           
          
        >
          <div className="flex text-white rounded-l-2xl ">
            <FaCalculator size={16} className="md:mx-1 " /> 
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
