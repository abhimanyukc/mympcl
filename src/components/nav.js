import React, { useState } from 'react';
import { FaBars, FaAngleDown, FaSearch, FaTimes } from 'react-icons/fa';
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
    <div className='flex items-center justify-between px-8 mx-auto bg-green-800 select-none md:flex-row max-w-screen-2xl md:px-20'>

      <div className='flex flex-col'>
      <div className='flex md:hidden'>
        <div className=''>
          <FaBars alt='SearchIcon' className='w-8 h-8 ' onClick={toggleLinks} />
        </div>
      </div>

      <nav
        className={`flex  flex-col md:flex-row items-center sm:flex-row ${showLinks ? 'flex' : 'hidden'} md:flex cursor-pointer  md:pl-3`}
      > 
       {/* ml-3 text-white md:p-3 md:ml-4 hover:border-b-2 md:pr-24 */}
      <div className='p-2 md:pr-16 hover:border-b-2'>
      <Link to="/" className=""> <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='w-8 h-8 '
          /> </Link>
      </div>
       

        <div
          className='relative flex items-center p-1 text-white md:p-3 hover:border-b-2 md:pr-8'
          onClick={toggleDropdown}
        >
          About Us
          <FaAngleDown  />
          {isDropdownOpen && (
            <div className='absolute left-0 z-20 text-black bg-white shadow-md top-full'>
              <a href='information' className='block pl-1 border-b-2 hover:bg-green-800 hover:text-white'>
                Information
              </a>
              <a href='membership' className='block pl-1 border-b-2 text-nowrap hover:bg-green-800 hover:text-white'>
                Organization 
              </a>
              <a href='membership' className='block pl-1 border-b-2 text-nowrap hover:bg-green-800 hover:text-white'>
                Team Member
              </a>
              <a href='department' className='block pl-1 border-b-2 text-nowrap hover:bg-green-800 hover:text-white'>
                Department
              </a>
              <a href='branches' className='block pl-1 border-b-2 hover:bg-green-800 hover:text-white'>
                Branches
              </a>
            </div>
          )}
        </div>

        <div className='p-1 text-white md:p-3 md:ml-4 hover:border-b-2 md:pr-8'>
          <Link to="/services">Services</Link>
        </div>
       
        <div className='p-1 text-white md:p-3 md:ml-4 hover:border-b-2'>
          <Link to="/contact">Contact US</Link>
        </div>
      </nav>
      </div>


      <div className='flex items-center select-none md:flex'>
        
        <div className='flex items-center mr-2 select-none'>
          <div
            className='relative flex items-center ml-1 bg-white rounded-md md:mx-auto'
           
            onClick={toggleDropdown2}
          >
            EN
            <img
              src={require('../images/dropdown2.jpeg')}
              alt='Dropdownlogo2'
              className='w-8 h-6 p-1 ml-30'
            />
            {isDropdownOpen2 && (
              <div className='absolute left-0 z-40 bg-white border rounded-md shadow-md top-full hover:bg-green-800 hover:text-white'>
                <a href='#' className='block pr-7'>
                  नेपा
                </a>
              </div>
            )}
          </div>
  
  
        </div>
  
  {/* <Link to="/login" className=''>
        <div className='text-white bg-indigo-800 border rounded-md '>Login</div>
        </Link> */}


<div className='relative flex p-1 my-2 md:hidden' onClick={handleSearchIconClick}> 
          <FaSearch className='w-8 h-6 text-white ml-30' />
          </div>
         
           {/* Main div with white background */}
        {isSearchOpen && (
    
          <div className='absolute  top-12  z-40 flex    md:mx-auto transform -translate-x-1/2 bg-white border rounded-md left-1/2  md:top-[40px]' >
            <div className='flex flex-col '>
                 <div className='flex items-center justify-between hidden border-b-2 md:justify-between md:flex'>
                        <div className=''>Search</div>
                        <div className=''><FaTimes
                        onClick={handleCloseIconClick}
                        /></div>
                 </div>
  
  
                
  
                 <div className='flex items-center mt-1 rounded-lg md:justify-between '>
                  <button>
                 <input
              type="text"
               placeholder="Search..."
              className="w-20 border md:w-full"
             /> 
             </button>
             <FaSearch className=""/>
                  </div>
                 
            </div>
          </div>
        )}



       
        </div>
      


     
    </div>
  );
};

export default Nav;