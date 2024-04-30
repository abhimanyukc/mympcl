import React from 'react'
import { useTranslation } from 'react-i18next'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const BankTeller = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <div className='px-8 mx-auto max-w-screen-2xl '>
      <div className=''>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>{t('bankTeller.message')}</h1>
      <div className='mt-4 '> {t('bankTeller1.message')}
      {t('bankTeller2.message')}
         </div>

         <div className='px-2 py-2 mt-8 bg-gray-100 border md:pb-6 md:pl-6 '>
             <div className='flex items-center mt-2 '>
                <div className='md:flex'>
                 < FaMap className='mr-4'/>
                 <div className='hidden md:flex'>{t('bankTeller3.message')}:</div>
                 </div>
                <div className=' md:ml-12'>{t('bankTeller4.message')}</div>
             </div>

             <div className='flex items-center mt-2'>
             <div className='md:flex'>
                 < FaClock className='mr-4'/>
                 <div className='hidden md:flex'>{t('bankTeller5.message')}:</div>
                 </div>
                <div className='md:ml-24'>{t('bankTeller6.message')}</div>
             </div>

             <div className='flex items-center mt-2'>
             <div className='md:flex'>
                 < FaUser className='mr-4'/>
                 <div className='hidden md:flex'>{t('bankTeller7.message')}:</div>
                 </div>
                <div className=' md:ml-16'> {t('bankTeller8.message')}</div>
             </div>

             <div className='flex items-center mt-2 '>
             <div className='md:flex'>
                 < FaMoneyCheck className='mr-4'/>
                 <div className='hidden md:flex'>{t('bankTeller9.message')}</div>
                 </div>
                <div className=' md:ml-20'>{t('bankTeller10.message')}</div>
             </div>

             <div className='flex flex-wrap items-center mt-2 '>
             <div className='md:flex'>
                 < FaHome className='mr-4'/>
                 <div className='hidden md:flex'>{t('bankTeller11.message')}</div>
                 </div>
                <div className=' md:ml-4' >{t('bankTeller12.message')}, {t('bankTeller13.message')},{t('bankTeller14.message')}, {t('bankTeller15.message')}, {t('bankTeller16.message')}</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            {t('bankTeller17.message')}
            </div>
            <div className='mb-2'>
            {t('bankTeller18.message')}
            </div>

            <div >
            {t('bankTeller19.message')}


            </div>

            <h6 className='mt-6 text-2xl font-bold'>{t('bankTeller20.message')}</h6>
            <div className='mt-4 '>{t('bankTeller21.message')}</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '>{t('bankTeller22.message')} </li>
                <li className='mt-2 '> {t('bankTeller23.message')}</li>
                <li className='mt-2 '>{t('bankTeller24.message')}</li>
                <li className='mt-2 '> {t('bankTeller25.message')}</li>
                <li className='mt-2 '>{t('bankTeller26.message')}</li>
                <li className='mt-2 '>{t('bankTeller27.message')}</li>
                <li className='mt-2 '>{t('bankTeller28.message')}</li>
                <li className='mt-2 '>{t('bankTeller29.message')}</li>
                <li className='mt-2 '>{t('bankTeller30.message')}</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>{t('bankTeller31.message')}</h6>
            <div className='mt-4 '>{t('bankTeller32.message')}</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '>{t('bankTeller33.message')}</li>
                <li className='mt-2 '> {t('bankTeller34.message')}</li>
                <li className='mt-2 '>{t('bankTeller35.message')}</li>
                <li className='mt-2 '> {t('bankTeller36.message')}</li>
                <li className='mt-2 '>{t('bankTeller37.message')}</li>
                <li className='mt-2 '> {t('bankTeller38.message')}</li>
                <li className='mt-2 '> {t('bankTeller39.message')}</li>
                <li className='mt-2 '>{t('bankTeller40.message')}</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>{t('bankTeller41.message')}</h6>
            <div className='mt-4 '>{t('bankTeller42.message')}</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>{t('bankTeller43.message')}</li>
                <li className='mt-2 '> {t('bankTeller44.message')}</li>
                <li className='mt-2 '>{t('bankTeller45.message')}</li>
                <li className='mt-2 '>{t('bankTeller46.message')}</li>
            </ul>

            <Link to = '/career/applicationForm' className='flex items-center justify-center px-4 py-2 rounded-md w-36 md:mt-2 bg-secondary '>
                <FaMailBulk className='ml-1 text-white'/>
               <div className='ml-2 text-white '>{t('bankTeller48.message')}</div> 
                </Link>
         </div>

         <div className='mt-6 '>{t('bankTeller47.message')}
        <div className='inline  text-nowrap'> {t('bankTeller49.message')} </div>  <span className='font-semibold underline text-secondary text-nowrap'>{t('bankTeller50.message')}</span>{t('bankTeller51.message')}</div>
    </div>
    </div>
  )
}

export default BankTeller
