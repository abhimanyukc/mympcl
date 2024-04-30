import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
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
  const searchRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !event.target.classList.contains("search-icon")
      ) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
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
    <div className="flex flex-wrap items-center justify-between py-2 px-4 mx-auto bg-gradient-to-r from-indigo-800 from-10% via-sky-800 via-30% to-blue-800 to-90% select-none  md:justify-between md:px-5 max-w-screen-2xl">
      <div className="flex flex-wrap items-center py-1 pr-1 space-x-2 cursor-pointer md:justify-center md:p-1 md:space-x-4">
        <Link to="/career" className="">
          <div className="flex items-center justify-center pl-2 text-white md:pl-3 md:w-full ">
            {" "}
            {t("header.message")}
          </div>
        </Link>
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
          <div className="flex items-center justify-center text-white md:w-full">
            {" "}
            {t("header4.message")}{" "}
          </div>
        </Link>
        <Link to="/branches">
          <div className="flex items-center justify-center text-white md:w-full">
            {" "}
            {t("header6.message")}
          </div>
        </Link>

        <Link to="/downloads">
          <div className="flex items-center justify-center text-white md:w-full">
            {" "}
            {t("header7.message")}
          </div>
        </Link>
        <Link to="/login" className="">
          <div className="text-white ">{t('header8.message')}</div>
        </Link>
      </div>

      <div className="flex items-center justify-center space-x-4 md:flex">
      <div className='relative hidden md:flex' onClick={handleSearchIconClick}> 
          <FaSearch className='w-4 h-4 text-white md:ml-30' />
          </div>
         
            {/* Main div with white background */}
            {isSearchOpen && (
    
    <div className='absolute  top-12  z-40 flex    md:mx-auto transform -translate-x-1/2 bg-white border rounded-md left-1/2  md:top-[40px]' >

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
