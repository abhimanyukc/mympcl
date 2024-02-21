import React, { useState } from 'react';
import { FaBars, FaAngleDown , FaSearch, FaTimes} from 'react-icons/fa';
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



  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
  };

  const handleCloseIconClick = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className='flex justify-between mx-auto select-none bg-secondary max-w-screen-2xl md:px-24'>
      <div className='flex md:hidden'>
        <div className='m-2'>
          <FaBars alt='SearchIcon' className='w-8 h-8 p-1' onClick={toggleLinks} />
        </div>
      </div>

      <nav
        className={`flex flex-wrap items-center sm:flex-row ${showLinks ? 'flex' : 'hidden'} md:flex cursor-pointer `}
      > 
      <div className='py-3 hover:border-b-2'>
      <Link to="/"/>
       <h1 className='text-white'>Home </h1>
      </div>
       

        <div
          className='relative flex items-center p-3 ml-4 text-white hover:border-b-2'
          onClick={toggleDropdown}
        >
          About Us
          <FaAngleDown  />
          {isDropdownOpen && (
            <div className='absolute left-0 flex flex-col text-black bg-white shadow-md top-full'>
              <a href='information' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-600'>
                Information
              </a>
              <a href='membership' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-600'>
                Organization Director
              </a>
              <a href='membership' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-600'>
                Team Member
              </a>
              <a href='department' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-600'>
                Department
              </a>
              <a href='branches' className='block pl-1 border-b-2 md:pl-4 md:pr-28 md:py-2 hover:bg-green-600'>
                Branches
              </a>
            </div>
          )}
        </div>

        <div className='p-3 ml-4 text-white hover:border-b-2'>
          <Link to="/services">Services</Link>
        </div>
        <div className='p-3 ml-4 text-white hover:border-b-2'>
          <Link to="/contact">Contact US</Link>
        </div>
      </nav>

      <div className='flex items-center select-none md:flex'>
        <div
          className='relative flex p-1 m-2 bg-white rounded-md md:mx-auto'
         
          onClick={toggleDropdown2}
        >
          EN
          <img
            src={require('../images/dropdown2.jpeg')}
            alt='Dropdownlogo2'
            className='w-6 h-6 ml-30'
          />
          {isDropdownOpen2 && (
            <div className='absolute left-0 z-40 mt-0 bg-white shadow-md top-full hover:bg-green-500'>
              <a href='#' className='block p-1 mx-2 '>
                नेपा
              </a>
            </div>
          )}
        </div>

        <div className='px-1 ml-2 text-white '>
         |
        </div>
       
        <div className='relative p-1 m-1' onClick={handleSearchIconClick}> 
        <FaSearch className='w-6 h-6 text-white ml-30' />
        </div>
       
         {/* Main div with white background */}
      {isSearchOpen && (
  
        <div className='absolute left-0 z-40 flex px-3 py-3 mx-auto transform -translate-x-1/2 bg-white border rounded-md left-1/2' >
          <div className='flex flex-col w-full '>
               <div className='flex items-center justify-between p-2 border-b-2'>
                      <div className=' pr-96'>Search</div>
                      <div className=''><FaTimes
                      onClick={handleCloseIconClick}
                      /></div>
               </div>


              

               <div className='flex items-center justify-between p-2 mt-4 rounded-lg'>
               <input
            type="text"
             placeholder="Search..."
            className="p-1 border pr-96"
           /> 
           <FaSearch/>
                </div>
               
          </div>
        </div>
      )}



      </div>
    </div>
  );
};

export default Nav;
