import React, { useState } from "react";
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



  return (
    <div className="flex items-center justify-between p-1 mx-auto bg-indigo-800 select-none md:px-24 md:py-4 max-w-screen-2xl">
       
      <div className="flex items-center justify-center space-x-1 cursor-pointer md:space-x-3">
      
        <Link to="/career"  className="md:pr-8"><div className="flex items-center justify-center h-10 p-1 ml-1 bg-white rounded-md md:w-full">Career</div></Link>
        <div className="md:pr-8">
        <div className="relative flex items-center justify-center h-10 p-1 bg-white rounded-md md:w-full" onClick={toggleDropdown}> Download my App <FaAngleDown />
        </div>
        </div>
        
          {isDropdownOpen && (
                <div className='absolute flex flex-col bg-white rounded-md shadow-md top-12'>
            <a href='#' className='pl-2 border-b-2 hover:bg-green-800 hover:text-white'>
            Ios App
            </a>
            <a href='#' className='pl-2 hover:bg-green-800 hover:text-white'>
            Android  App
            </a>
            
          </div>
          )}
        <Link to="/news"><div className="flex items-center justify-center h-10 p-1 ml-1 bg-white rounded-md md:pr-8 md:w-full">News </div></Link>
        
      

      </div>

      <div className='relative p-1 my-2' onClick={handleSearchIconClick}> 
          <FaSearch className='w-8 h-8 text-white ml-30' />
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
  );
};

export default Header;