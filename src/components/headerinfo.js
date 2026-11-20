import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import {
     FaMailBulk,
     FaHome,
  } from "react-icons/fa";


const Headerinfo = () => {

  const [t] = useTranslation("global");
  const [isVisible , setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev => !prev)); //toggle visibility
    },1000);    //changing blinking speed by adjusting the interval time (in milliseconds)
      
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div className='pr-8 mx-auto select-none max-w-screen-2xl md:px-8'>
      
      <header className='flex flex-wrap mb-2 '>
        <div className='md:flex'>
      <div className='flex md:mr-1'>
      <div className='pl-6 mt-0 transition duration-300 md:pl-1 md:mt-0 ' >
       <img
            src={require('../images/logosahakari.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-50 h-50 md:w-28 md:h-28'
          /> 
      </div>

      <div className='flex flex-col mt-8 md:mt-2 '>
      <div className='text-xl font-semibold text-green-500 md:mt-0'>गाउसहर बहुउदेस्यिय सहकारि सस्था लि.</div>
      <div className='hidden w-full font-extrabold truncate md:flex text-md md:text-2xl md:w-96 text-wrap text-secondary'>{t('headerInfo1.message')}</div>
      </div>
      </div>
        <div className='md:mt-1 md:mr-4 md:ml-12 '>
         
          
            <div className='w-full pl-8 text-sm font-normal truncate md:pl-0 md:mt-2 text-wrap md:w-80 md:text-primary text-secondary'>{t('headerInfo2.message')}: {t("headerInfo18.message")}, Srijana chowk, Pokhara Nepal
             {t('headerInfo6.message')}:- {t('headerInfo10.message')}, {t('headerInfo11.message')}, {t('headerInfo12.message')}</div>
             <div className='w-full text-active md:bg-secondary'>
              {isVisible && (
                <p className='hidden font-bold animate-blink md:flex'>{t('headerInfo13.message')}:{t('headerInfo14.message')} - {t('headerInfo15.message')}{t('headerInfo16.message')}</p> 
              )}
             
              </div>
           
        </div>
        </div>

        <div className='pl-8 md:pl-2 md:mt-0'>

        <div className='flex items-center '>
                <FaMailBulk className='mr-1 text-secondary'/>
                <div className='flex items-center text-2xl font-medium text-secondary'>G<span className='text-xl font-medium '>ausahar@gmail.com</span></div>
            </div>

           <div className=' text-secondary'>{t('headerInfo7.message')}:-</div>
           <div className='flex '>
           <div className='flex items-center '>
            <FaHome className='mr-1 text-primary'/> <div className=' text-primary text-nowrap'>{t('headerInfo8.message')}, {t('headerInfo9.message')}</div>
           </div>
           <div className='flex ml-4'>
          <div className='mr-1 text-primary'> &#9742; {/* Unicode character for phone icon */}</div> <div  className=' text-primary text-nowrap'>{t('headerInfo17.message')}</div>
           </div>
           </div>

           <div className='flex '>
           <div className='flex items-center'>
            <FaHome className='mr-1 text-primary'/> <div className=' text-primary'>{t('headerInfo19.message')},{t('headerInfo9.message')}</div>
           </div>
           <div className='flex ml-9'>
           <div className='mr-1 text-primary'> &#9742; </div> <div className=' text-primary text-nowrap'>{t('headerInfo17.message')}</div>
           </div>
           </div>


        </div>

  


      </header>
    </div>
  )
}

export default Headerinfo
