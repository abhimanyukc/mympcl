import React, { useState, useEffect, useRef } from "react";
import { format } from 'date-fns';
import { FaAngleDown, FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import NepaliDate from 'nepali-date-converter';

const Header = ({ lang }) => {
  const [t, i18n] = useTranslation("global");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const dropdownRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    if (lang === 'नेपा') {
      const nepaliDate = new NepaliDate(date);
      return `${nepaliDate.format("MMMM")} ${nepaliDate.getDate()}, ${nepaliDate.getYear()}`;
    } else {
      return format(date, 'MMM d, yyyy');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
  };

  const handleCloseIconClick = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-between py-2 mx-auto bg-indigo-800 select-none px-7 md:justify-between md:px-24 max-w-screen-2xl">
       
      <div className="flex items-center justify-center py-1 pr-1 space-x-2 cursor-pointer md:p-1 md:space-x-4">
      
        <Link to="/career"  className=""><div className="flex items-center justify-center text-white md:w-full "> {t("header.message")}</div></Link>
        <div className="">
        <div
            ref={dropdownRef}
            className="relative flex items-center justify-center text-white md:w-full text-nowrap"
            onClick={toggleDropdown}
          >
           {t("header1.message")} <FaAngleDown />
          </div>
        </div>
        
          {isDropdownOpen && (
                <div className='absolute z-20 flex flex-col bg-white shadow-md top-12'>
            <a href='#' className='pl-2 border-b-2 hover:bg-green-800 hover:text-white'>
             {t("header2.message")}
            </a>
            <a href='#' className='pl-2 hover:bg-green-800 hover:text-white'>
             {t("header3.message")}
            </a>

            
          </div>
          )}
        <Link to="/news"><div className="flex items-center justify-center text-white md:w-full"> {t("header4.message")} </div></Link>
        
            


      </div>
     
        
     
    
    <div className="flex items-center justify-center space-x-4 md:flex">
      <div className='relative hidden md:flex' onClick={handleSearchIconClick}> 
          <FaSearch className='w-4 h-4 text-white md:ml-30' />
          </div>
         
           {/* Main div with white background */}
        {isSearchOpen && (
    
          <div className='absolute  top-12  z-40 flex    md:mx-auto transform -translate-x-1/2 bg-white border rounded-md left-1/2  md:top-[40px]' >
            <div className='flex flex-col '>
                 <div className='flex items-center justify-between hidden border-b-2 md:justify-between md:flex'>
                        <div className=''> {t("header5.message")}</div>
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
   
     
      <div className="hidden mr-1 text-lg font-normal">{format(currentDate, 'eee,')}</div>
      <div className="hidden text-lg md:flex">{formatDate(currentDate)}</div>
      </div>
      
      </div>


    </div>
  );
};

export default Header;