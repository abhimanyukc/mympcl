import React, { useState } from 'react';
import { FaBars, FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };











  
  

  return (
    <div className='flex justify-between mx-auto bg-green-800 select-none md:flex-row max-w-screen-2xl md:px-24'>

      <div className='flex flex-col'>
      <div className='flex md:hidden'>
        <div className='m-2'>
          <FaBars alt='SearchIcon' className='w-8 h-8 p-1' onClick={toggleLinks} />
        </div>
      </div>

      <nav
        className={`flex flex-wrap flex-col md:flex-row items-center sm:flex-row ${showLinks ? 'flex' : 'hidden'} md:flex cursor-pointer `}
      > 
       {/* ml-3 text-white md:p-3 md:ml-4 hover:border-b-2 md:pr-24 */}
      <div className=' md:pr-24 md:p-3 hover:border-b-2'>
      <Link to="/" className=""> <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='w-10 h-6 rounded-full '
          /> </Link>
      </div>
       

        <div
          className='relative flex items-center ml-8 text-white md:p-3 hover:border-b-2 md:pr-24'
          onClick={toggleDropdown}
        >
          About Us
          <FaAngleDown  />
          {isDropdownOpen && (
            <div className='absolute left-0 z-20 flex flex-col text-black bg-white shadow-md top-full'>
              <a href='information' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-800 hover:text-white'>
                Information
              </a>
              <a href='membership' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-800 hover:text-white'>
                Organization Director
              </a>
              <a href='membership' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-800 hover:text-white'>
                Team Member
              </a>
              <a href='department' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-800 hover:text-white'>
                Department
              </a>
              <a href='branches' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-800 hover:text-white'>
                Branches
              </a>
            </div>
          )}
        </div>

        <div className='ml-3 text-white md:p-3 md:ml-4 hover:border-b-2 md:pr-24'>
          <Link to="/services">Services</Link>
        </div>
       
        <div className='text-white ml-7 md:p-3 md:ml-4 hover:border-b-2'>
          <Link to="/contact">Contact US</Link>
        </div>
      </nav>
      </div>


      <div className='flex items-center select-none md:flex'>
        
        <div className='flex items-center select-none '>
          <div
            className='relative flex items-center px-2 py-1 ml-1 bg-white rounded-md md:mx-auto'
           
            onClick={toggleDropdown2}
          >
            EN
            <img
              src={require('../images/dropdown2.jpeg')}
              alt='Dropdownlogo2'
              className='w-8 h-8 p-2 ml-30'
            />
            {isDropdownOpen2 && (
              <div className='absolute left-0 z-40 mt-0 bg-white shadow-md top-full hover:bg-green-800 hover:text-white'>
                <a href='#' className='block p-1 mx-2 '>
                  नेपा
                </a>
              </div>
            )}
          </div>
  
  
        </div>
  
  <Link to="/login" className=''>
        <div className='px-1 py-2 text-white bg-indigo-800 border rounded-md'>Login</div>
        </Link>
        </div>
      


     
    </div>
  );
};

export default Nav;