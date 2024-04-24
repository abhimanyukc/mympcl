import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import {  FaAngleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

//nepali no animation not possible

const Account = () => {
  const [t, i18n] = useTranslation("global");
  const [valuesLoaded, setValuesLoaded] = useState(false);
  const [countValue, setCountValue] = useState(0);
  const componentRef = useRef(null);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleScroll = () => {
    if (componentRef.current) {
      const { top } = componentRef.current.getBoundingClientRect();
      if (top <= window.innerHeight * 0.75) {
        setValuesLoaded(true);
        window.removeEventListener('scroll', handleScroll);
        startCountAnimation();
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const startCountAnimation = () => {
    const targetValue = parseFloat(t('acc22.message').replace(/,/g, '')); // Parse the number string
    const duration = 2000; // milliseconds
    const interval = 16; // milliseconds
    const steps = duration / interval;
    const increment = targetValue / steps;

    let currentStep = 0;
    const animationInterval = setInterval(() => {
      setCountValue((prevValue) => {
        currentStep++;
        if (currentStep >= steps) {
          clearInterval(animationInterval);
          return targetValue;
        }
        return prevValue + increment * (currentStep + 1);
      });
    }, interval);
  };



  return (
    <div className='px-5 py-12 mx-auto font-sans bg-white select-none max-w-screen-2xl md:px-8 md:py-8'>
    <div className='flex flex-col p-2 md:px-4'>


      <div className='mb-2 text-2xl font-bold'>{t('acc.message')}</div>
      <div className='font-serif '>{t('acc1.message')}</div>
        
        <div className='flex flex-col font-serif md:flex-row'>
       
       <div className='flex flex-col my-8 '>
        <div className='mb-4 text-lg font-semibold text-green-800'>{t('acc2.message')}</div>
        <div className='flex flex-row items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div className=''>{t('acc12.message')} </div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div className=''>{t('acc13.message')}</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div className=''>{t('acc14.message')}</div></div>
       </div>

       <div className='flex flex-col mx-2 my-8'>
        <div className='mb-4 font-serif text-lg font-semibold text-green-800'>{t('acc3.message')}</div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>{t('acc15.message')}</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>{t('acc16.message')}</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>{t('acc17.message')}</div></div>
       </div>
       
       <div className='flex flex-col mx-2 my-8'>
        <div className='mb-4 font-serif text-lg font-semibold text-green-800'>{t('acc4.message')}</div>
        <div className='flex items-start '><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>{t('acc15.message')}</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>{t('acc16.message')}</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>{t('acc17.message')}</div></div>
       </div>

       <div className='flex flex-col mt-8'>
        <div className='mb-4 font-serif text-lg font-semibold text-green-800'>{t('acc5.message')}</div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>{t('acc18.message')}</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>{t('acc19.message')}</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>{t('acc20.message')}</div></div>
       </div>
        </div>
        </div>

        <div className='flex flex-col '>

        <div className='flex w-20 mx-auto mb-12 text-center text-white bg-primary'>{t('acc6.message')}</div>

        <div  ref={componentRef} className='flex flex-col flex-wrap justify-center w-11/12 py-2 mx-auto text-white rounded-md md:w-full bg-primary md:m-4 md:flex-row'>
          <div className='flex mx-8 mt-8 md:mt-4'>
        <img
            src={require('../images/Capital.jpg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col ml-2'>
          <div>
                {valuesLoaded && <span>{Math.floor(countValue).toLocaleString()}</span>}
              </div>
          <div>{t('acc7.message')}</div>
          </div>
          </div>

          <div className='flex mx-8 mt-4'>
        <img
            src={require('../images/asst.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col ml-2'>
          <div>
            {valuesLoaded && (
              <CountUp end={514169286} duration={2} separator="," />
            )}
          </div>
          <div>{t('acc8.message')}</div>
          </div>
          </div>

          
          <div className='flex mx-8 mt-4'>
        <img
            src={require('../images/deposit.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col ml-2'>
          <div>
            {valuesLoaded && (
              <CountUp end={275015063} duration={2} separator="," />
            )}
          </div>
          <div>{t('acc9.message')}</div>
          </div>
          </div>

         
          <div className='flex mx-8 mt-4'>
        <img
            src={require('../images/members.jpg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col object-fill ml-2'>
          <div>
            {valuesLoaded && (
              <CountUp end={9967} duration={2} separator="," />
            )}
          </div>
          <div>{t('acc10.message')}</div>
          </div>
          </div>

         
          <div className='flex mx-8 mt-4'>
        <img
            src={require('../images/reserve.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col ml-2'>
          <div>
            {valuesLoaded && (
              <CountUp end={986073515} duration={2} separator="," />
            )}
          </div>
          
          <div>{t('acc11.message')}</div>
          </div>
          </div>

          
         

        </div>
    </div>
    </div>
  )
}

export default Account
