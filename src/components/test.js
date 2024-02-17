import React, { useState } from 'react';
import { FaPercent, FaPhone, FaCalculator } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  // fixed top-0 flex justify-end h-full mx-auto right-6 md:right-8 max-w-screen-2xl
  return (
     
    <div className="flex flex-col items-end mx-auto max-w-screen-2xl">
      <div className="fixed flex flex-col space-y-4 text-green-800 transform -translate-y-1/2 top-1/2">
        <Link
          to="/interestrate"
          className=""
          onMouseEnter={() => handleMouseEnter('Interest Rate')}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredItem === 'Interest Rate' ? (
            <div className="flex p-1 border ">
              <FaPercent size={16} className='mx-2' /> Interest Rate
            </div>
          ) : (
            <FaPercent size={16} />
          )}
        </Link>

        <Link
          to="/contact"
          className=""
          onMouseEnter={() => handleMouseEnter('Contact')}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredItem === 'Contact' ? (
            <div className="flex p-1 border ">
              <FaPhone size={16}  className='mx-2'/> Contact
            </div>
          ) : (
            <FaPhone size={16} />
          )}
        </Link>

        <Link
          to="/calculator"
          className=""
          onMouseEnter={() => handleMouseEnter('Calculator')}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredItem === 'Calculator' ? (
            <div className="flex p-1 border ">
              <FaCalculator size={16} className='mx-2' /> Calculator
            </div>
          ) : (
            <FaCalculator size={16} />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
