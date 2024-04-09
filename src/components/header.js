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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
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
    <div className="flex flex-wrap items-center justify-between py-1 px-7 mx-auto bg-gradient-to-r from-indigo-800 from-10% via-sky-800 via-30% to-blue-800 to-90% select-none  md:justify-between md:px-20 max-w-screen-2xl">
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
            {/* <a href='#' className='p-2 pl-2 text-white border-b-2 '>
             {t("header2.message")}
            </a> */}
            <Link
              to="#"
              className="flex justify-center px-2 pt-2 text-blue-800 border-b-2 hover:text-customBlue"
            >
              {" "}
              <FaAndroid className="w-8 h-8" />
            </Link>
            <Link
              to="#"
              className="flex justify-center px-2 pt-2 text-blue-800 hover:text-customBlue"
            >
              {" "}
              <FaApple className="w-8 h-8" />{" "}
            </Link>
            {/* <a href='#' className='p-2 pl-2 text-white '>
             {t("header3.message")}
            </a> */}
          </div>
        )}
        <Link to="/branches">
          <div className="flex items-center justify-center text-white md:w-full">
            {" "}
            {t("header6.message")}
          </div>
        </Link>
        <Link to="/news">
          <div className="flex items-center justify-center text-white md:w-full">
            {" "}
            {t("header4.message")}{" "}
          </div>
        </Link>
        <Link to="/downloads">
          <div className="flex items-center justify-center text-white md:w-full">
            {" "}
            {t("header7.message")}
          </div>
        </Link>
          <Link to="/login" className=''>
        <div className='text-white '>Login</div>
        </Link>
      </div>

      <div className="flex items-center justify-center space-x-4 md:flex">
        <div
          className="relative hidden md:flex"
          onClick={handleSearchIconClick}
        >
          <FaSearch className="w-4 h-4 text-white md:ml-4" />
        </div>

        {/* Main div with white background */}
        {isSearchOpen && (
          <div className="absolute p-1  top-12  z-40 flex    md:mx-auto transform -translate-x-1/2 bg-white border rounded-md   right-36 md:top-[2px]">
            <div className="flex flex-col ">
              {/* <div className='items-center justify-between hidden border-b-2 md:justify-between md:flex'>
                        <div className=''> {t("header5.message")}</div>
                        <div className=''><FaTimes
                        onClick={handleCloseIconClick}
                        /></div>
                 </div> */}

              <div className="flex items-center mt-1 rounded-lg md:justify-between">
                <button>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-20 border border-transparent md:w-full "
                  />
                </button>
                <FaSearch className="text-gray-400 " />
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center text-white md:ml-2">
          <div className="hidden mr-1 text-lg font-normal">
            {format(currentDate, "eee,")}
          </div>
          <div className="hidden text-lg md:flex">
            {formatDate(currentDate)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
