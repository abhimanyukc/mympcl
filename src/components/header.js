import React, { useState } from "react";
import { FaAngleDown } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between p-1 mx-auto bg-orange-600 select-none md:px-24 md:py-4 max-w-screen-2xl">
       <Link to="/"> <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='w-12 h-10 mr-2 rounded-full'
          /> </Link>
      <div className="flex items-center justify-center space-x-1 cursor-pointer md:space-x-3">
        <Link to="/career"><div className="flex items-center justify-center h-10 p-1 ml-1 bg-white rounded-md md:w-full">Career</div></Link>
        <div className="relative flex items-center justify-center h-10 p-1 bg-white rounded-md md:w-full" onClick={toggleDropdown}> Download my App <FaAngleDown />
       
        </div>
          {isDropdownOpen && (
                <div className='absolute flex flex-col bg-white rounded-md shadow-md top-12'>
            <a href='#' className='pl-2 border-b-2 hover:bg-green-500'>
            Ios App
            </a>
            <a href='#' className='pl-2 hover:bg-green-500'>
            Android  App
            </a>
            
          </div>
          )}
        <Link to="/news"><div className="flex items-center justify-center h-10 p-1 ml-1 bg-white rounded-md md:w-full">News </div></Link>
        <Link to="/epaper"><div className="flex items-center justify-center h-10 p-1 ml-1 bg-white rounded-md md:w-full">Epaper</div></Link>
      </div>
    </div>
  );
};

export default Header;
