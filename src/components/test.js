import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const [activeElement, setActiveElement] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavItemClick = (element) => {
    setActiveElement(element);
    setIsDropdownOpen(false); // Close the dropdown if open
  };

  return (
    <nav
      className={`flex flex-col md:flex-row sm:flex-row ${showLinks ? 'flex' : 'hidden'} md:flex cursor-pointer md:pl-3`}
    >
      <div className='p-1 md:p-2 md:mr-4 hover:border-b-2'>
        <Link to="/" className={`${activeElement === 'home' ? 'bg-black text-white' : ''}`}>
          <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-6'
            onClick={() => handleNavItemClick('home')}
          />
        </Link>
      </div>

      <div
        className='relative flex items-center px-1 py-2 text-white md:p-2 md:mr-4 hover:border-b-2'
        onClick={toggleDropdown}
      >
        About Us
        <FaAngleDown />
        {isDropdownOpen && (
          <div className='absolute left-0 z-20 text-black bg-white shadow-md top-full'>
            {/* ... dropdown content ... */}
          </div>
        )}
      </div>

      {/* ... other navigation items ... */}
    </nav>
  );
};

export default Navbar;
