import React from 'react'
import { FaBars } from 'react-icons/fa';
const Nav = () => {
  return (
    <div className=' bg-indigo-800 max-w-screen-2xl mx-auto flex flex-wrap'> 
       <logo className="flex sm:flex-row items-center">
       <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='w-8 h-8 m-2 p-1'
          />
          <div className=' text-white'>गाउसहर बहुउदेस्यिय सहकारि सस्था लि  पोखरा-८,  कास्कि </div>
         </logo>
       <div className='flex  items-center  md:mx-auto'>
       <div className='p-1 m-2 bg-white rounded-md md:mx-auto flex'>EN <img
            src={require('../images/dropdown2.jpeg')}
            alt='Dropdownlogo2'
            className='w-6 h-6 ml-30'
          /></div>
           <div className='m-2'><img
            src={require('../images/searchicon.jpg')}
            alt='SearchIcon'
            className='w-6 h-6 ml-30'
          /></div>
       <div className='m-2'>
        <FaBars alt="SearchIcon" className='w-8 h-8 m-2 p-1'/>
         </div>
      
       </div>
    </div>
  )
}

export default Nav
