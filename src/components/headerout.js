import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { useLocation } from 'react-router-dom';
import {
  FaApple,
  FaAndroid,
  FaAngleDown,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NepaliDate from "nepali-date-converter";

const Header = ({ lang }) => {
  const [t, i18n] = useTranslation("global");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const dropdownRef = useRef(null);
 
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Function to close dropdown and search when clicked outside
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.classList.contains("search-icon")
      ) {
        setIsDropdownOpen(false);
        setIsSearchOpen(false);
      }
    };

    // Add event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatDate = (date) => {
    if (lang === "नेपा") {
      const nepaliDate = new NepaliDate(date);
      return `${nepaliDate.format(
        "MMMM"
      )} ${nepaliDate.getDate()}, ${nepaliDate.getYear()}`;
    } else {
      return format(date, "MMM d, yyyy");
    }
  };

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
    <div className="flex flex-wrap items-center justify-between py-2 px-3 mx-auto bg-gradient-to-r from-indigo-800 from-10% via-sky-800 via-30% to-blue-800 to-90% select-none md:justify-between md:px-5 max-w-screen-2xl">
      <div className="flex flex-wrap items-center py-1 pr-1 space-x-2 cursor-pointer md:justify-center md:p-1 md:space-x-4">
        <Link to="/career" className="">
          <div className={`flex items-center justify-center hover:text-customHover pl-2 text-white md:pl-3 md:w-full 
            ${location.pathname === '/career'||location.pathname==='/career/' ? 'text-active' : 'text-white' }`} >
            {" "}
            {t("header.message")}
          </div>
        </Link>
        <div className="">
          <div
            ref={dropdownRef}
            className="relative flex items-center justify-center text-white hover:text-customHover md:w-full text-nowrap"
            onClick={toggleDropdown}
          >
            {t("header1.message")} <FaAngleDown />
          </div>
        </div>

        {isDropdownOpen && (
          <div className="absolute z-20 flex flex-col w-16 bg-white shadow-md md:left-36 left-20 top-10">
            <Link
              to="https://play.google.com/store/apps?hl=en&gl=US&pli=1"
              className="flex justify-center px-2 pt-2 text-blue-800 border-b-2 hover:text-customBlue"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaAndroid className="w-8 h-8" />
            </Link>
            <Link
              to="https://www.apple.com/app-store/"
              className="flex justify-center px-2 pt-2 text-blue-800 hover:text-customBlue"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaApple className="w-8 h-8" />{" "}
            </Link>
          </div>
        )}
        <Link to="/news">
          <div className={`flex items-center justify-center text-white hover:text-customHover md:w-full 
            ${location.pathname === '/news' || location.pathname === '/news/' ? 'text-active' : 'text-white'}
            `}>
            {" "}
            {t("header4.message")}{" "}
          </div>
        </Link>
        <Link to="/branches">
          <div className={`flex items-center hover:text-customHover justify-center text-white md:w-full
           ${location.pathname === '/branches' || location.pathname === '/branches/' ? 'text-active' : 'text-white'}
          `}>
            {" "}
            {t("header6.message")}
          </div>
        </Link>

        <Link to="/downloads">
          <div className={`flex items-center hover:text-customHover justify-center text-white md:w-full
           ${location.pathname === '/downloads' || location.pathname === '/downloads/' ? 'text-active' : 'text-white'}
          `}>
            {" "}
            {t("header7.message")}
          </div>
        </Link>
        <Link to="/login" className="">
          <div className="text-white hover:text-customHover ">{t('header8out.message')}</div>
        </Link>
      </div>

      <div className="flex items-center justify-center space-x-4 md:flex">
      <div className='relative hidden md:flex' onClick={handleSearchIconClick}> 
          <FaSearch className='w-4 h-4 text-white md:ml-30 search-icon' />
          </div>
         
            {/* Main div with white background */}
            {isSearchOpen && (
    
    // <div className='absolute hidden  top-4  z-40 md:flex    md:mx-auto transform -translate-x-2/3  2xl:translate-x-1/2 2xl:left-2/3 xl:-translate-x-1/3 bg-white border rounded-md left-2/3   lg:left-3/4  md:top-[6px]' >
    <div className='absolute hidden  top-2   z-40 md:flex    md:mx-auto transform md:-translate-x-2/3   bg-white border rounded-md md:left-2/3  lg:left-3/4  xl:-translate-x-1/3  xl:left-2/3 md:top-[2px]' >

           <div className='flex items-center p-1 mt-1 rounded-lg md:p-2 md:justify-between'>
           <input
        type="text"
         placeholder="Search..."
        className="w-20 md:w-full"
       /> 
       <FaSearch className=""/>
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
