import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='mx-auto bg-green-800 max-w-screen-2xl '>
      <div className='flex flex-row flex-wrap md:justify-center md:mx-auto'>
      
        <div className='p-1 m-2 bg-white rounded-md md:mx-auto'>Career</div>
        <div className='p-1 m-2 bg-white rounded-md md:mx-auto'>News & Event</div>

        <div
          className='relative p-1 m-2 bg-white rounded-md cursor-pointer md:mx-auto'
          onClick={toggleDropdown}
        >

            <div className='flex'>
          <img
            src={require('../images/dropdown.png')}
            alt='Dropdownlogo'
            className='w-6 h-6 ml-30'
          />
          Download My App
          </div>
         
          {isDropdownOpen && (
                <div className='absolute left-0 z-10 mt-2 shadow-md top-full bg-slate-400'>
            <a href='#' className='block p-2 hover:bg-gray-200 '>
              Android App
            </a>
            <a href='#' className='block p-2 hover:bg-gray-200'>
              Ios App
            </a>
          </div>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default Header;
