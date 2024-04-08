
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaAngleDown, FaSearch, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
 

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'नेपा', label: 'नेपा' },
];

const Nav = ({ setLanguage, setTimeFormat }) => {
   const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const location = useLocation();

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
         (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
        (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) && 
        (dropdownRef3.current && !dropdownRef3.current.contains(event.target))
      ) {
        // Clicked outside either of the dropdowns, close them
         setIsDropdownOpen(false);
        setIsDropdownOpen2(false);
        setIsDropdownOpen3(false);
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
  }, [dropdownRef, dropdownRef2]);



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
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };



  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
  };

  const handleCloseIconClick = () => {
    setIsSearchOpen(false);
  };

// console.log(useLocation().pathname);





  
  

  return (
    <div className='flex items-center justify-between px-8 py-2 mx-auto bg-green-800 select-none md:flex-row max-w-screen-2xl md:pl-16 md:pr-24'>
           
           
      <div className='flex flex-col '>
      <div className='flex '>
      <div className='flex items-center select-none md:hidden'>
          <FaBars alt='SearchIcon' className='w-8 h-8 text-white' onClick={toggleLinks} />
        </div>
  
      
         
        
      </div>

      

      <nav
        className={`flex   flex-col  items-center  md:flex-row    sm:flex-row ${showLinks ? 'flex' : 'hidden'} md:flex cursor-pointer  md:pl-3  `}
      > 
      {/* <Link to="/" className="" >
      <div className='p-1 transition duration-300 md:p-2 md:mr-4 ' >
       <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-12 h-10 '
          /> 
      </div>
      </Link> */}
      <Link to="/" className="" >
      <div className='p-1 text-white transition duration-300 md:pl-5 md:p-2 md:mr-4 ' >
         <div className='hover:text-customHover'>Home</div>
      </div>
      </Link>
       

        <div
          className='relative flex items-center px-1 py-2 text-white hover:text-customHover md:p-2 md:mr-4 '
          onClick={toggleDropdown} 
          ref={dropdownRef}
        >
         
          <p>
        {t("nav.message")}
      </p>
         
          <FaAngleDown  />
          {isDropdownOpen && (
            <div className='absolute left-0 z-20 text-black bg-white shadow-md top-full' >
           <Link to='/information' >
           
            <div className={`block p-2 py-3 border-b-2 hover:text-customGreen
             ${location.pathname === '/information'||location.pathname==='/information/' ? 'text-primary' : 'text-black' } `}>
              {t("nav2.message")}
              </div>
              </Link>

              <Link to='/organization'>
                <div className={`block p-2 py-3 border-b-2 text-nowrap hover:text-customGreen
                ${location.pathname === '/organization'||location.pathname==='/organization/' ? 'text-primary' : 'text-black'} `}>
              {t("nav3.message")}
              </div>
              </Link>
              <Link to='/membership'>
              <div className={`block p-2 py-3 border-b-2 text-nowrap hover:text-customGreen
                ${location.pathname === '/membership'||location.pathname==='/membership/' ? 'text-primary' : 'text-black'} `}>
              {t("nav4.message")}
              </div>
              </Link>

              <Link to='/department'>
              <div className={`block p-2 py-3 border-b-2 text-nowrap hover:text-customGreen
                ${location.pathname === '/department'||location.pathname==='/department/' ? 'text-primary' : 'text-black'} `}>
              {t("nav5.message")}
              </div>
              </Link>
              <Link to='/branches'>
              <div className={`block p-2 py-3 border-b-2 text-nowrap hover:text-customGreen
                ${location.pathname === '/branches'||location.pathname==='/branches/' ? 'text-primary' : 'text-black'} `}>
              {t("nav6.message")}
              </div>
              </Link>
            </div>
          )}
        </div>

      {/* <Link to="/services"> <div className={`m-2 hover:text-customHover ${location.pathname === '/services'||location.pathname==='/services/' ? 'text-active' :'text-white'} `}
        
        // 'p-1 text-white md:p-2 md:mr-4 {useLocation().pathname == }
         >
          {t("nav7.message")}
        </div>
        </Link> */}

       <div> <div className='relative flex items-center px-1 py-2 text-white hover:text-customHover md:p-2 md:mr-4'
        
        // 'p-1 text-white md:p-2 md:mr-4 {useLocation().pathname == }
           onClick={toggleDropdown3}
           ref={dropdownRef3}
        >
          <div className='flex'>
          {t("nav7.message")}
          <FaAngleDown/>
          </div>
          
           {isDropdownOpen3 && (
            <div className='absolute left-0 z-20 text-black bg-white shadow-md top-full' >
           <Link to='/debit-card-atm-service/product/service/detail' >
           
            <div className={`block p-2 py-3 border-b-2 hover:text-customGreen
             ${location.pathname === '/debit-card-atm-service/product/service/detail'||location.pathname==='/debit-card-atm-service/product/service/detail/' ? 'text-primary' : 'text-black' } `}>
              Debit Card (ATM Service)
              </div>
              </Link>

              <Link to='/free-mobile-banking-service/product/service/detail'>
                <div className={`block p-2 py-3 border-b-2 text-nowrap hover:text-customGreen
                ${location.pathname === '/free-mobile-banking-service/product/service/detail'||location.pathname==='/free-mobile-banking-service/product/service/detail/' ? 'text-primary' : 'text-black'} `}>
               Free Mobile Banking Service
              </div>
              </Link>
              <Link to='/sms-service/product/service/detail'>
              <div className={`block p-2 py-3 border-b-2 text-nowrap hover:text-customGreen
                ${location.pathname === '/sms-service/product/service/detail'||location.pathname==='/sms-service/product/service/detail/' ? 'text-primary' : 'text-black'} `}>
                SMS Service
              </div>
              </Link>

              <Link to='/abbs-service/product/service/detail'>
              <div className={`block p-2 py-3 border-b-2 text-nowrap hover:text-customGreen
                ${location.pathname === '/abbs-service/product/service/detail'||location.pathname==='/abbs-service/product/service/detail/' ? 'text-primary' : 'text-black'} `}>
                 ABBS Service
              </div>
              </Link>
              <Link to='/kramik-bachat/product/service/detail'>
              <div className={`block p-2 py-3 border-b-2 text-nowrap hover:text-customGreen
                ${location.pathname === '/kramik-bachat/product/service/detail'||location.pathname==='/kramik-bachat/product/service/detail/' ? 'text-primary' : 'text-black'} `}>
                  Karmik BACHAT
              </div>
              </Link>

              <Link to='Gausahar-Double-Dhamaka-Bachat/product/service/detail'>
              <div className={`block p-2 py-3 border-b-2 text-nowrap hover:text-customGreen
                ${location.pathname === '/kramik-bachat/product/service/detail/'||location.pathname==='/kramik-bachat/product/service/detail/' ? 'text-primary' : 'text-black'} `}>
                  GauSahar Double Dhamak Bachat
              </div>
              </Link>
            </div>
          )}
        </div>
        </div>
      
      
        <Link to="/gallery" >
        <div className={`m-2 hover:text-customHover ${location.pathname === '/gallery' || location.pathname === '/gallery/' ? 'text-active' : 'text-white'} `}
        // 'p-1 text-white md:p-2 md:mr-4'
          >
             Gallery
        </div>
        </Link>

        <Link to="/reports" >
        <div className={`m-2 hover:text-customHover ${location.pathname === '/reports' || location.pathname === '/reports/' ? 'text-active' : 'text-white'} `}
        // 'p-1 text-white md:p-2 md:mr-4'
          >
             Reports
        </div>
        </Link>

        <Link to="/loan" >
        <div className={`m-2 hover:text-customHover ${location.pathname === '/loan' || location.pathname === '/loan/' ? 'text-active' : 'text-white'} `}
        // 'p-1 text-white md:p-2 md:mr-4'
          >
              Loan Scheme
        </div>
        </Link>

        <Link to="/healthprogram" >
        <div className={`m-2 hover:text-customHover ${location.pathname === '/healthprogram' || location.pathname === '/healthprogram/' ? 'text-active' : 'text-white'} `}
        // 'p-1 text-white md:p-2 md:mr-4'
          >
             Health Program
        </div>
        </Link>

        <Link to="/notice" >
        <div className={`m-2 hover:text-customHover ${location.pathname === '/notice' || location.pathname === '/notice/' ? 'text-active' : 'text-white'} `}
        // 'p-1 text-white md:p-2 md:mr-4'
          >
             Notices
        </div>
        </Link>

        <Link to="/kyc" >
        <div className={`m-2 hover:text-customHover ${location.pathname === '/kyc' || location.pathname === '/kyc/' ? 'text-active' : 'text-white'} `}
        // 'p-1 text-white md:p-2 md:mr-4'
          >
             KYC
        </div>
        </Link>

        <Link to="/contact" >
        <div className={`m-2 hover:text-customHover ${location.pathname === '/contact' || location.pathname === '/contact/' ? 'text-active' : 'text-white'} `}
        // 'p-1 text-white md:p-2 md:mr-4'
          >
        {t("nav8.message")}
        </div>
        </Link>
      </nav>
      </div>


      <div className='flex items-center select-none '>
        
        <div className='flex items-center select-none'>
          <div
            className='relative flex items-center p-1 rounded-md md:mx-auto'
           
             ref={dropdownRef2}
             onClick={toggleDropdown2}
          >
           
            <div className='text-white' >{t("nav1.message")}</div>
              <FaAngleDown
              alt='Dropdownlogo2'
              className='w-6 h-6 text-white'
             
            />
            {isDropdownOpen2 && (
              
              <div className='absolute left-0 z-40 bg-white border shadow-md top-full'>
            {languages.map((lang) => (
              
              <Link
                key={lang.code}
                to='#'
                onClick={() => handleChangeLanguage(lang.code)}
              >
                <div className={`block px-5 py-1 border-b-2 hover:text-customGreen ${location.pathname === '#' ? 'text-active' : 'text-black'}`}>
                {lang.label}
                </div>
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
          <FaSearch className='w-4 h-4 text-white md:w-8 md:h-6 ' />
          </div>
         
           {/* Main div with white background */}
        {isSearchOpen && (
    
          <div className='absolute  top-12  z-40 flex   mx-12   md:mx-auto transform  -translate-x-1/2 bg-white border rounded-md left-1/2   md:top-[40px]' >
            <div className='flex flex-col '>
                 {/* <div className='flex items-center justify-between border-b-2 md:justify-between md:flex'>
                        <div className=''>{t("nav9.message")}</div>
                        <div className=''><FaTimes
                        onClick={handleCloseIconClick}
                        /></div>
                 </div> */}
  
  
                
  
                 <div className='flex items-center px-2 m-1 rounded-lg md:justify-between '>
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