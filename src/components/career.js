import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Careertest = () => {
  const [t, i18n] = useTranslation('global');

  // Define an array of objects containing data for each link
  const careerData = [
    {
      to: '/career/softwareEngineer',
      primaryText: t('careerTest2.message'),
      dangerText1: t('careerTest8.message'),
      dangerText2: t('careerTest3.message'),
      userText1: t('careerTest4.message'),
      userText2: t('careerTest5.message'),
      arrowText: t('careerTest6.message'),
    },


    {
        to: '/career/bankTeller',
        primaryText: t('careerTest7.message'),
        dangerText1: t('careerTest8.message'),
        dangerText2: t('careerTest9.message'),
        userText1: t('careerTest10.message'),
        userText2: t('careerTest11.message'),
        arrowText: t('careerTest12.message'),
      },


      {
        to: '/career/customerServiceRepresentative',
        primaryText: t('careerTest13.message'),
        dangerText1: t('careerTest14.message'),
        dangerText2: t('careerTest15.message'),
        userText1: t('careerTest16.message'),
        userText2: t('careerTest17.message'),
        arrowText: t('careerTest18.message'),
      },

      {
        to: '/career/loanOfficer',
        primaryText: t('careerTest19.message'),
        dangerText1: t('careerTest20.message'),
        dangerText2: t('careerTest21.message'),
        userText1: t('careerTest22.message'),
        userText2: t('careerTest23.message'),
        arrowText: t('careerTest24.message'),
      },

      {
        to: '/career/financialAnalyst',
        primaryText: t('careerTest25.message'),
        dangerText1: t('careerTest26.message'),
        dangerText2: t('careerTest27.message'),
        userText1: t('careerTest28.message'),
        userText2: t('careerTest29.message'),
        arrowText: t('careerTest30.message'),
      },

      {
        to: '/career/riskAnalyst',
        primaryText: t('careerTest31.message'),
        dangerText1: t('careerTest32.message'),
        dangerText2: t('careerTest33.message'),
        userText1: t('careerTest34.message'),
        userText2: t('careerTest35.message'),
        arrowText: t('careerTest36.message'),
      },

      {
        to: '/career/complianceOfficer',
        primaryText: t('careerTest37.message'),
        dangerText1: t('careerTest38.message'),
        dangerText2: t('careerTest39.message'),
        userText1: t('careerTest40.message'),
        userText2: t('careerTest41.message'),
        arrowText: t('careerTest42.message'),
      },

      {
        to: '/career/branchManager',
        primaryText: t('careerTest43.message'),
        dangerText1: t('careerTest44.message'),
        dangerText2: t('careerTest45.message'),
        userText1: t('careerTest46.message'),
        userText2: t('careerTest47.message'),
        arrowText: t('careerTest48.message'),
      },

      {
        to: '/career/investmentAdvisor',
        primaryText: t('careerTest49.message'),
        dangerText1: t('careerTest50.message'),
        dangerText2: t('careerTest51.message'),
        userText1: t('careerTest52.message'),
        userText2: t('careerTest53.message'),
        arrowText: t('careerTest54.message'),
      },

      {
        to: '/career/mortgageSpecialist',
        primaryText: t('careerTest55.message'),
        dangerText1: t('careerTest56.message'),
        dangerText2: t('careerTest57.message'),
        userText1: t('careerTest58.message'),
        userText2: t('careerTest59.message'),
        arrowText: t('careerTest60.message'),
      },

      {
        to: '/career/technologySpecialist',
        primaryText: t('careerTest61.message'),
        dangerText1: t('careerTest62.message'),
        dangerText2: t('careerTest63.message'),
        userText1: t('careerTest64.message'),
        userText2: t('careerTest65.message'),
        arrowText: t('careerTest66.message'),
      },


     

    
    

  ];

  return (
    <div className='px-8 mx-auto max-w-screen-2xl '>
      <div className='mt-8 mb-4'>
        <div className='flex font-bold text-black '>
          <div className='mr-2 text-2xl border-b-2 border-red-500 md:text-4xl'>{t('careerTest.message')}</div>
          <div className='text-2xl md:text-4xl'>{t('careerTest1.message')}</div>
        </div>
      </div>

      <div className='flex flex-wrap '>
        {/* Mapping careerLinks array to generate data dynamically */}
        {careerData.map((Data, index) => (
          <Link to={Data.to} key={index} className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary'>{Data.primaryText}</div>
            <div className='text-danger'>
              <div>{Data.dangerText1}</div>
              <div className='text-nowrap'>{Data.dangerText2}</div>
            </div>
            <div className='flex items-center'>
              <div className='text-primary'><FaUser /></div>
              <div className='ml-1 font-thin'>{Data.userText1}</div>
              <div className='ml-1 font-thin'>{Data.userText2}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
              <div>{Data.arrowText}</div>
              <FaArrowRight className='hover:scale-100 hover:ml-1' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Careertest;
