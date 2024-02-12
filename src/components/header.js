import React, { useState } from 'react';

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='max-w-screen-2xl mx-auto bg-green-800 '>
      <div className='flex flex-row flex-wrap md:justify-center md:mx-auto'>
        <div className='p-1 m-2 bg-white rounded-md md:mx-auto'>Career</div>
        <div className='p-1 m-2 bg-white rounded-md md:mx-auto'>News & Event</div>

        <div
          className='relative p-1 m-2 bg-white rounded-md md:mx-auto cursor-pointer'
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
            <div className='absolute top-full left-0 bg-slate-400 shadow-md mt-2 z-10'>
              <a href='#' className='block p-2 hover:bg-gray-200 '>
                Android App
              </a>
              <a href='#' className='block p-2 hover:bg-gray-200'>
                Ios App
              </a>
            </div>
          )}
        </div>

        <div className='p-1 m-2 bg-white rounded-md md:mx-auto'>News & Event</div>
        <div className='p-1 m-2 bg-white rounded-md md:mx-auto'>Career</div>
        <div className='p-1 m-2 bg-white rounded-md md:mx-auto'>News & Event</div>
      </div>
    </div>
  );
};

export default Dropdown;
