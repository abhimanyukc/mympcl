import React from 'react'
import { useTranslation } from 'react-i18next'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const ComplianceOfficer = () => {
    const [t, i18n] = useTranslation('global');
  return (
    <div className='px-8 mx-auto max-w-screen-2xl '>
      <div className=''>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>{t('complianceofficer.message')}</h1>
      <div className='mt-4 '> {t('complianceofficer1.message')}
      {t('complianceofficer2.message')}
         </div>

         <div className='px-2 py-2 mt-8 bg-gray-100 border md:pb-6 md:pl-6 '>
             <div className='flex items-center mt-2 '>
                <div className='md:flex'>
                 < FaMap className='mr-4'/>
                 <div className='hidden md:flex'>{t('complianceofficer3.message')}</div>
                 </div>
                <div className=' md:ml-12'>{t('complianceofficer4.message')}</div>
             </div>

             <div className='flex items-center mt-2'>
             <div className='md:flex'>
                 < FaClock className='mr-4'/>
                 <div className='hidden md:flex'>{t('complianceofficer5.message')}</div>
                 </div>
                <div className='md:ml-24'>{t('complianceofficer6.message')}</div>
             </div>

             <div className='flex items-center mt-2'>
             <div className='md:flex'>
                 < FaUser className='mr-4'/>
                 <div className='hidden md:flex'>{t('complianceofficer7.message')}</div>
                 </div>
                <div className=' md:ml-16'> {t('complianceofficer8.message')}</div>
             </div>

             <div className='flex items-center mt-2 '>
             <div className='md:flex'>
                 < FaMoneyCheck className='mr-4'/>
                 <div className='hidden md:flex'>{t('complianceofficer9.message')}</div>
                 </div>
                <div className=' md:ml-20'>{t('complianceofficer10.message')}</div>
             </div>

             <div className='flex flex-wrap items-center mt-2 '>
             <div className='md:flex'>
                 < FaHome className='mr-4'/>
                 <div className='hidden md:flex'>{t('complianceofficer11.message')}</div>
                 </div>
                <div className=' md:ml-4' >{t('complianceofficer12.message')},{t('complianceofficer13.message')},{t('complianceofficer14.message')} {t('complianceofficer15.message')},{t('complianceofficer16.message')} {t('complianceofficer17.message')},{t('complianceofficer18.message')},{t('complianceofficer19.message')} {t('complianceofficer20.message')} {t('complianceofficer21.message')} {t('complianceofficer22.message')},{t('complianceofficer23.message')},{t('complianceofficer24.message')}</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            {t('complianceofficer25.message')}
            </div>
            <div className='mb-2'>
            {t('complianceofficer26.message')}
            </div>

            <div >
            {t('complianceofficer27.message')}


            </div>

            <h6 className='mt-6 text-2xl font-bold'>{t('complianceofficer28.message')}</h6>
            <div className='mt-4 '>{t('complianceofficer29.message')}</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '>{t('complianceofficer30.message')}</li>
                <li className='mt-2 '> {t('complianceofficer31.message')}</li>
                <li className='mt-2 '>{t('complianceofficer32.message')}</li>
                <li className='mt-2 '> {t('complianceofficer33.message')}</li>
                <li className='mt-2 '>{t('complianceofficer34.message')}</li>
                <li className='mt-2 '>{t('complianceofficer35.message')}</li>
                <li className='mt-2 '> {t('complianceofficer36.message')}</li>
                <li className='mt-2 '>{t('complianceofficer37.message')}</li>
                <li className='mt-2 '>{t('complianceofficer38.message')}</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>{t('complianceofficer39.message')}</h6>
            <div className='mt-4 '>{t('complianceofficer40.message')}</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '> {t('complianceofficer41.message')}</li>
                <li className='mt-2 '> {t('complianceofficer42.message')}</li>
                <li className='mt-2 '> {t('complianceofficer43.message')}</li>
                <li className='mt-2 '> {t('complianceofficer44.message')}</li>
                <li className='mt-2 '>{t('complianceofficer45.message')}</li>
                <li className='mt-2 '> {t('complianceofficer46.message')}</li>
                <li className='mt-2 '> {t('complianceofficer47.message')}</li>
                <li className='mt-2 '>{t('complianceofficer48.message')}</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>{t('complianceofficer49.message')}</h6>
            <div className='mt-4 '>{t('complianceofficer50.message')}</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>{t('complianceofficer51.message')}</li>
                <li className='mt-2 '> {t('complianceofficer52.message')}</li>
                <li className='mt-2 '>{t('complianceofficer53.message')}</li>
                <li className='mt-2 '> {t('complianceofficer54.message')}</li>
            </ul>

            <Link to = '/career/applicationForm' className='flex items-center justify-center px-4 py-2 rounded-md w-36 md:mt-2 bg-secondary '>
                <FaMailBulk className='ml-1 text-white'/>
               <div className='ml-2 text-white '>{t('complianceofficer55.message')}</div> 
                </Link>
         </div>

         <div className='mt-6 '>{t('complianceofficer56.message')}
         {t('complianceofficer57.message')}  <span className='font-semibold underline text-secondary text-nowrap'>{t('complianceofficer58.message')}</span> {t('complianceofficer59.message')}</div>
    </div>
    </div>
  )
}

export default ComplianceOfficer
