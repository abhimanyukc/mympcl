import React, { useState } from 'react';
import { FaPercent, FaPhone, FaCalculator } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
 

  return (
    <div className="flex flex-col items-end mx-auto select-none max-w-screen-2xl md:py-2">
      <div className="fixed flex flex-col space-y-4 text-green-800 transform -translate-y-1/2 top-1/2 ">
        <Link
          to="/interestrate"
          className='p-2 text-white rounded-l-2xl bg-secondary'
        >
          
          <div className="flex text-white rounded-l-2xl bg-secondary">
            <FaPercent size={16} className="mx-1" /> 
          </div>
        </Link>

        <Link
          to="/contact"
          className='p-2 text-white rounded-l-2xl bg-secondary'
            
        >
          <div className="flex text-white rounded-l-2xl bg-secondary">
            <FaPhone size={16} className="mx-1" />
          </div>
        </Link>

        <Link
          to="/emicalculator"
          className='p-2 text-white rounded-l-2xl bg-secondary'
           
          
        >
          <div className="flex text-white rounded-l-2xl bg-secondary">
            <FaCalculator size={16} className="mx-1" /> 
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
