import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaAngleDown, FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'नेपा', label: 'नेपा' },
];

const Nav = ({ setLanguage, setTimeFormat }) => {
  // const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        // (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
        (dropdownRef2.current && !dropdownRef2.current.contains(event.target))
      ) {
        // Clicked outside either of the dropdowns, close them
        // setIsDropdownOpen(false);
        setIsDropdownOpen2(false);
      }
    };

    const handleMouseDown = () => {
      // Handle mousedown event
      // You can add any logic you want to execute on mousedown here
    };

    // Add event listeners when component mounts
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleMouseDown);

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [dropdownRef2]);
  // }, [dropdownRef, dropdownRef2]);


  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang ) => {
    setLanguage(lang);
    setTimeFormat(lang === 'नेपा' ? 'नेपा' : 'en');
    setIsDropdownOpen2(false);
    //set the selected language to local storage
    localStorage.setItem('language' , lang);
    i18n.changeLanguage(lang);
  }
 
 

  
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
    <div className='flex items-center justify-between px-8 mx-auto bg-green-800 select-none md:flex-row max-w-screen-2xl md:pl-20 md:pr-24'>

      <div className='flex flex-col'>
      <div className='flex '>

      
        <div className='flex items-center select-none md:hidden'>
          <FaBars alt='SearchIcon' className='w-8 h-8 ' onClick={toggleLinks} />
        </div>
  
        <div className='flex items-center p-2 ml-40 select-none md:p-0 md:hidden'>
        
        <div className='flex items-center select-none'>
          <div
            className='relative flex items-center ml-1 bg-white rounded-md md:pr-0 md:mx-auto'
            ref={dropdownRef2}
            
          >
             {t("nav1.message")}
           
         
             <FaAngleDown
                alt='Dropdownlogo2'
              className='w-8 h-6 p-1 ml-30'
              onClick={toggleDropdown2}
            />
            {isDropdownOpen2 && (
               <div className='absolute left-0 z-40 bg-white border shadow-md top-full'>
               {languages.map((lang) => (
                 <Link
                   key={lang.code}
                   to='#'
                   onClick={() => handleChangeLanguage(lang.code)}
                   className='block pr-7 hover:bg-green-800 hover:text-white'
                 >
                   {lang.label}
                 </Link>
               ))}
             </div>
            )}
          </div>
  
  
        </div>
  
  {/* <Link to="/login" className=''>
        <div className='text-white bg-indigo-800 border rounded-md '>Login</div>
        </Link> */}


<div className='relative flex p-1 my-2 md:hidden' onClick={handleSearchIconClick}> 
          <FaSearch className='w-5 h-5 text-white ml-30' />
          </div>
         
           {/* Main div with white background */}
        {isSearchOpen && (
    
          <div className='absolute  top-12  z-40 flex    md:mx-auto transform -translate-x-1/2 bg-white border rounded-md left-1/2  md:top-[40px]' >
            <div className='flex flex-col '>
                 <div className='flex items-center justify-between border-b-2 md:justify-between md:flex'>
                        <div className=''> {t("nav1.message")}</div>
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

      

      <nav
        className={`flex  p-2 flex-col items-center  md:flex-row    sm:flex-row ${showLinks ? 'flex' : 'hidden'} md:flex cursor-pointer  md:pl-3  `}
      > 
      <Link to="/" className="" >
      <div className='p-1 transition duration-300 md:p-2 md:mr-4 ' >
       <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-12 h-10 '
          /> 
      </div>
      </Link>
       

        <div
          className='relative flex items-center px-1 py-2 text-white md:p-2 md:mr-4 '
        >
         
          <p>
        {t("nav.message")}
      </p>
         
          <FaAngleDown  onClick={toggleDropdown}  />
          {isDropdownOpen && (
            <div className='absolute left-0 z-20 text-black bg-white shadow-md top-full'>
           <Link to='/information' className='block pl-1 border-b-2 hover:bg-green-800 hover:text-white'>
              {t("nav2.message")}
              </Link>
              <Link to='/membership' className='block pl-1 border-b-2 text-nowrap hover:bg-green-800 hover:text-white'>
              {t("nav3.message")}
              </Link>
              <Link to='/membership' className='block pl-1 border-b-2 text-nowrap hover:bg-green-800 hover:text-white'>
              {t("nav4.message")}
              </Link>
              <Link to='/department' className='block pl-1 border-b-2 text-nowrap hover:bg-green-800 hover:text-white'>
              {t("nav5.message")}
              </Link>
              <Link to='/branches' className='block pl-1 border-b-2 hover:bg-green-800 hover:text-white'>
              {t("nav6.message")}
              </Link>
            </div>
          )}
        </div>

        <Link to="/services"> <div className='p-1 text-white md:p-2 md:mr-4 '  >
          {t("nav7.message")}
        </div>
        </Link>
        <Link to="/contact" >
        <div className='p-1 text-white md:p-2 md:mr-4'  >
        {t("nav8.message")}
        </div>
        </Link>
      </nav>
      </div>


      <div className='items-center hidden select-none md:flex '>
        
        <div className='flex items-center select-none'>
          <div
            className='relative flex items-center bg-white rounded-md md:mx-auto'
           
             ref={dropdownRef2}
          >
           
            <div > {t("nav1.message")}</div>
            {/* <img
              src={require('../images/dropdown2.jpeg')}
              alt='Dropdownlogo2'
              className='w-8 h-6 p-1 ml-30'
              onClick={toggleDropdown2}
            /> */}
              <FaAngleDown
              alt='Dropdownlogo2'
              className='w-6 h-6 '
              onClick={toggleDropdown2}
            />
            {isDropdownOpen2 && (
              
              <div className='absolute left-0 z-40 bg-white border shadow-md top-full'>
            {languages.map((lang) => (
              <Link
                key={lang.code}
                to='#'
                onClick={() => handleChangeLanguage(lang.code)}
                className='block pr-2 hover:bg-green-800 hover:text-white'
              >
                {lang.label}
              </Link>
            ))}
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
                 <div className='flex items-center justify-between border-b-2 md:justify-between md:flex'>
                        <div className=''>{t("nav9.message")}</div>
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