import React from 'react'
import {
     FaMailBulk,
     FaHome,
  } from "react-icons/fa";

import EnglishIcon from '../images/united-kingdom.png'; // Import English icon
import NepaliIcon from '../images/nepali.png'; // Import Nepali icon
const Headerinfo = () => {
  return (
    <div className='pr-8 mx-auto max-w-screen-2xl md:px-20'>
      
      <header className='flex flex-wrap '>
        <div className='md:flex'>
      <div className='flex md:mr-1'>
      <div className='pt-8 pl-6 transition duration-300 md:pl-0 md:pt-10 ' >
       <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='object-fill h-36 w-60 md:w-32 md:h-32'
          /> 
      </div>

      <div className='flex flex-col mt-8 md:mt-14'>
      <div className='font-semibold text-green-500 md:mt-0'>गाउसहर बहुउदेस्यिय सहकारि सस्था लि.</div>
      <div className='w-full text-2xl font-extrabold truncate md:w-96 text-wrap text-secondary'>GAUSHAR MULTIPURPOSE COOPERATIVE SOCIETY LTD</div>
      </div>
      </div>
        <div className='md:mt-1 md:mr-8 '>
         
          
            <div className='w-full pl-8 mt-4 text-sm font-normal truncate md:pl-1 md:mt-12 text-wrap md:w-72 md:text-primary text-secondary'>Head Office: GAUSHAR MULTIPURPOSE COOPERATIVE Building, Srijana chowk, Pokhara Nepal
             Tel:- 01-4478006, 01-4465102, 01-4465104, 01-4465256, 01-4465274</div>
            <div className='w-5/6 py-2 ml-7 text-active md:bg-secondary'>Open:Sun - Fri(9:30 to 5:00)</div>
        </div>
        </div>

        <div className='md:mt-10 md:pl-6 pl-7'>

        <div className='flex items-center '>
                <FaMailBulk className='mr-2 text-secondary'/>
                <div className='flex items-center text-2xl font-medium text-secondary'>G<div className='text-xl font-medium '>ausahar@gmail.com</div></div>
            </div>

           <div className='mb-1 text-secondary'>Branches:-</div>
           <div className='flex '>
           <div className='flex items-center '>
            <FaHome className='mr-1 text-primary'/> <div className=' text-primary text-nowrap'>Lamchaur, pokhara</div>
           </div>
           <div className='flex ml-4'>
          <div className='mr-1 text-primary'> &#9742; {/* Unicode character for phone icon */}</div> <div  className=' text-primary text-nowrap'>01-4512842</div>
           </div>
           </div>

           <div className='flex '>
           <div className='flex items-center'>
            <FaHome className='mr-1 text-primary'/> <div className=' text-primary'>Newroad, pokhara</div>
           </div>
           <div className='flex ml-4'>
           <div className='mr-1 text-primary'> &#9742; </div> <div className=' text-primary text-nowrap'>01-4512842</div>
           </div>
           </div>

           <div className='flex flex-wrap '>
           <div className='flex items-center '>
            <FaHome className='mr-1 text-primary'/> <div className=' text-primary text-nowrap'>Amarsingh chowk, pokhara</div>
           </div>
           <div className='flex ml-4'>
           <div className='mr-1 text-primary'> &#9742; </div>  <div className=' text-primary text-nowrap'>01-4512842</div>
           </div>
           </div>
           
           <div className='flex flex-wrap '>
           <div className='flex items-center '>
            <FaHome className='mr-1 text-primary'/> <div className=' text-primary text-nowrap'>Mahendrapul, pokhara</div>
           </div>
           <div className='flex ml-4'>
           <div className='mr-1 text-primary'> &#9742; </div>  <div className=' text-primary text-nowrap'>01-4512842</div>
           </div>
           </div>

        </div>

        <div className='mt-6 md:mt-12 pl-7'>
           <div className='flex mb-2 md:flex-col'>
                 <div className='flex'>
                      <img src={EnglishIcon} width={20} height={20} alt="English" />
                      <div className='ml-1'>English</div>
                 </div>
          
            
            <div className='flex ml-2 md:ml-0 '>
               <img src={NepaliIcon} width={20} height={20} alt="Nepali" />
               <div className='ml-1 '>Nepali</div>
            </div>
            </div>
            <div className=''>
                <img  src="https://i.pinimg.com/564x/3d/ed/25/3ded252a6f1722342b596375a0858eec.jpg"  alt="imagedisplay" width={280} height={200}  className='md:w-28 md:h-24' />    
            </div>
           
        </div>


      </header>
    </div>
  )
}

export default Headerinfo
