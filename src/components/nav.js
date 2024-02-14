import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [ isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen );
  }
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2 );
  }

  return (
    <div className='flex flex-wrap mx-auto bg-indigo-800 max-w-screen-2xl '>
   
      <div className='flex items-center md:hidden'>
        <div className='m-2'>
          <FaBars alt='SearchIcon' className='w-8 h-8 p-1' onClick={toggleLinks} />
        </div>
      </div>

      <nav className={`flex  flex-wrap items-center   sm:flex-row ${showLinks ? 'flex' : 'hidden'} md:flex  cursor-pointer `}>
        <Link to="/">
          <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='w-8 h-8 p-1 m-2'
          />
        </Link>
        
     
        <div 
        className='flex items-center ml-4 text-white'
         onClick={toggleDropdown}
        >
          About Us
          <FaAngleDown/>
          </div>

          {isDropdownOpen && (
            <div className='absolute left-0 z-10 mt-2 shadow-md top-full bg-slate-400'>
            <a href='#' className='block p-2 hover:bg-gray-200 '>
              Information
            </a>
            <a href='#' className='block p-2 hover:bg-gray-200'>
             Organization Director
            </a>
            <a href='#' className='block p-2 hover:bg-gray-200'>
              Team Member
            </a>
            <a href='#' className='block p-2 hover:bg-gray-200'>
             Department
            </a>
            <a href='#' className='block p-2 hover:bg-gray-200'>
             Branches
            </a>
          </div>
        
          )}

        <div className='ml-4 text-white'>
        <Link to="/services">
          Services
          </Link>
          </div>
        <div className='ml-4 text-white'>
          <Link to="/contact">
          Contact uS
          </Link></div>
      </nav>

     
      <div className='items-center hidden md:flex md:mx-auto'>
        <div className='relative flex p-1 m-2 bg-white rounded-md md:mx-auto'
         onClick={toggleDropdown2}
        >EN
          <img
            src={require('../images/dropdown2.jpeg')}
            alt='Dropdownlogo2'
            className='w-6 h-6 ml-30'
          />
        </div>
        {isDropdownOpen2 && (
                <div className='absolute z-40 mt-0 bg-white shadow-md left-30 top-24'>
            <a href='#' className='block p-2 hover:bg-gray-200 '>
            नेपा
            </a>
            
          </div>
          )}

        <div className='m-2'>
          <img
            src={require('../images/searchicon.jpg')}
            alt='SearchIcon'
            className='w-6 h-6 ml-30'
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
