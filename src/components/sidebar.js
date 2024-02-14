import React from 'react';
import { FaPercent, FaPhone, FaCalculator } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed right-0 text-blue-800 transform -translate-y-1/2 top-1/2">
      <div className="relative mb-2 group">
        <Link to ="/interestrate">
        <FaPercent size={16} />
        </Link>
        <div className="absolute hidden p-2 bg-white rounded shadow-md group-hover:block right-4">
        <FaPercent size={16} /> Interest Rate
        </div>
      </div>
      <div className="relative mb-2 group">
        <FaPhone size={16} />
        <div className="absolute hidden p-2 bg-white rounded shadow-md group-hover:block right-4">
        <FaPhone size={16} />  Contact
        </div>
      </div>
      <div className="relative group">
        <FaCalculator size={16} />
        <div className="absolute hidden p-2 bg-white rounded shadow-md group-hover:block right-4">
        <FaCalculator size={16} /> Calculator
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
