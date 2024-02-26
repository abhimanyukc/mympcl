import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import { FaAngleDown, FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
  };

  const handleCloseIconClick = () => {
    setIsSearchOpen(false);
  };


  // const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex flex-wrap items-center justify-between px-8 bg-indigo-800 select-none md:justify-center md:justify-between md:px-24 max-w-screen-2xl">
       
      <div className="flex items-center justify-center space-x-1 cursor-pointer md:space-x-3">
      
        <Link to="/career"  className="md:pr-8"><div className="flex items-center justify-center bg-white rounded-md md:w-full ">Career</div></Link>
        <div className="md:pr-8">
        <div className="relative flex items-center justify-center bg-white rounded-md md:w-full text-nowrap" onClick={toggleDropdown}> Download my App <FaAngleDown />
        </div>
        </div>
        
          {isDropdownOpen && (
                <div className='absolute z-20 flex flex-col bg-white rounded-md shadow-md top-12'>
            <a href='#' className='pl-2 border-b-2 hover:bg-green-800 hover:text-white'>
            Ios App
            </a>
            <a href='#' className='pl-2 hover:bg-green-800 hover:text-white'>
            Android  App
            </a>
            
          </div>
          )}
        <Link to="/news"><div className="flex items-center justify-center ml-1 bg-white rounded-md md:w-full">News </div></Link>
        
      

      </div>
     
        
     
    
    <div className="flex items-center justify-center hidden md:flex ">
      <div className='relative hidden md:flex' onClick={handleSearchIconClick}> 
          <FaSearch className='w-4 h-4 text-white md:ml-30' />
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
  
  
                
  
                 <div className='flex items-center mt-1 rounded-lg md:justify-between'>
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
       <div className="flex items-center text-white md:ml-2">
   
     
      {/* <div className="mr-1 text-lg font-normal">{format(currentDate, 'eeee')}</div> */}
      <div className="text-lg ">{format(currentDate, 'MMM d, yyyy')}</div>
      </div>
      
      </div>


    </div>
  );
};

export default Header;