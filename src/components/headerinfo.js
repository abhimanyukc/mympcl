import React, {useState, useEffect} from 'react'
import {
     FaMailBulk,
     FaHome,
  } from "react-icons/fa";

import EnglishIcon from '../images/united-kingdom.png'; // Import English icon
import NepaliIcon from '../images/nepali.png'; // Import Nepali icon
const Headerinfo = () => {
  const [isVisible , setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev => !prev)); //toggle visibility
    },1000);    //changing blinking speed by adjusting the interval time (in milliseconds)
      
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div className='pr-8 mx-auto max-w-screen-2xl md:px-20'>
      
      <header className='flex flex-wrap mb-2 '>
        <div className='md:flex'>
      <div className='flex md:mr-1'>
      <div className='pl-6 mt-0 transition duration-300 md:pl-0 md:mt-0 ' >
       <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='object-fill h-48 w-96 md:w-28 md:h-28'
          /> 
      </div>

      <div className='flex flex-col mt-2 md:mt-2'>
      <div className='font-semibold text-green-500 md:mt-0'>गाउसहर बहुउदेस्यिय सहकारि सस्था लि.</div>
      <div className='w-full text-lg font-extrabold truncate md:text-2xl md:w-96 text-wrap text-secondary'>GAUSHAR MULTIPURPOSE COOPERATIVE SOCIETY LTD</div>
      </div>
      </div>
        <div className='md:mt-1 md:mr-4 '>
         
          
            <div className='w-full pl-8 text-sm font-normal truncate md:pl-0 md:mt-2 text-wrap md:w-80 md:text-primary text-secondary'>Head Office: GAUSHAR Sahakari, Srijana chowk, Pokhara Nepal
             Tel:- 01-4478006, 01-4465102, 01-4465104</div>
             <div className='w-full text-active md:bg-secondary'>
              {isVisible && (
                <p className='hidden font-bold animate-blink md:flex'>Open:Sun - Fri(9:30 to 5:00)</p> 
              )}
             
              </div>
           
        </div>
        </div>

        <div className='pl-8 md:mt-0 md:pl-0'>

        <div className='flex items-center '>
                <FaMailBulk className='mr-1 text-secondary'/>
                <div className='flex items-center text-2xl font-medium text-secondary'>G<span className='text-xl font-medium '>ausahar@gmail.com</span></div>
            </div>

           <div className=' text-secondary'>Branches:-</div>
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
{/* 
           <div className='flex flex-wrap '>
           <div className='flex items-center '>
            <FaHome className='mr-1 text-primary'/> <div className=' text-primary text-nowrap'>Amarsingh chowk, pokhara</div>
           </div>
           <div className='flex ml-4'>
           <div className='mr-1 text-primary'> &#9742; </div>  <div className=' text-primary text-nowrap'>01-4512842</div>
           </div>
           </div> */}
           
           {/* <div className='flex flex-wrap '>
           <div className='flex items-center '>
            <FaHome className='mr-1 text-primary'/> <div className=' text-primary text-nowrap'>Mahendrapul, pokhara</div>
           </div>
           <div className='flex ml-4'>
           <div className='mr-1 text-primary'> &#9742; </div>  <div className=' text-primary text-nowrap'>01-4512842</div>
           </div>
           </div>  */}

        </div>

        <div className='pl-4 mt-2 md:mt-2'>
          <div>
           <div className='flex mb-1 md:flex-col'>
                 <div className='flex ml-4 md:ml-0'>
                      <img src={EnglishIcon} width={24} height={12} alt="English" className='object-cover ' />
                      <div className='mr-2 '>English</div>
                 </div>
          
            
            <div className='flex md:ml-0 '>
               <img src={NepaliIcon} width={16} height={8} alt="Nepali" className='' />
               <div className=''>Nepali</div>
            </div>
            </div>
              
           
            </div>
            {/* <div className=''>
                <img  src="https://i.pinimg.com/564x/3d/ed/25/3ded252a6f1722342b596375a0858eec.jpg"  alt="imagedisplay" width={280} height={200}  className='md:w-28 md:h-24' />    
            </div> */}
           
        </div>


      </header>
    </div>
  )
}

export default Headerinfo
