import React from 'react'
import { useTranslation } from 'react-i18next'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const BranchManager = () => {
    const [t, i18n] = useTranslation("global");
  return (
    <div className='px-8 mx-auto max-w-screen-2xl '>
      <div className='md:px-20 '>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>{t("branchManager.message")}</h1>
      <div className='mt-4 '> {t("branchManager1.message")}
      {t("branchManager2.message")}
         </div>

         <div className='px-2 py-2 mt-8 bg-gray-100 border md:pb-6 md:pl-6 '>
             <div className='flex items-center mt-2 '>
                <div className='md:flex'>
                 < FaMap className='mr-4'/>
                 <div className='hidden md:flex'>{t("branchManager3.message")}</div>
                 </div>
                <div className=' md:ml-12'>{t("branchManager4.message")}</div>
             </div>

             <div className='flex items-center mt-2'>
             <div className='md:flex'>
                 < FaClock className='mr-4'/>
                 <div className='hidden md:flex'>{t("branchManager5.message")}</div>
                 </div>
                <div className='md:ml-24'>{t("branchManager6.message")}</div>
             </div>

             <div className='flex items-center mt-2'>
             <div className='md:flex'>
                 < FaUser className='mr-4'/>
                 <div className='hidden md:flex'>{t("branchManager7.message")}</div>
                 </div>
                <div className=' md:ml-16'> {t("branchManager8.message")}</div>
             </div>

             <div className='flex items-center mt-2 '>
             <div className='md:flex'>
                 < FaMoneyCheck className='mr-4'/>
                 <div className='hidden md:flex'>{t("branchManager9.message")}</div>
                 </div>
                <div className=' md:ml-20'>{t("branchManager10.message")}</div>
             </div>

             <div className='flex flex-wrap items-center mt-2 '>
             <div className='md:flex'>
                 < FaHome className='mr-4'/>
                 <div className='hidden md:flex'>{t("branchManager11.message")}</div>
                 </div>
                <div className=' md:ml-4' >{t("branchManager12.message")}, {t("branchManager13.message")}, {t("branchManager14.message")},{t("branchManager15.message")}, {t("branchManager16.message")}, {t("branchManager17.message")},{t("branchManager18.message")}, {t("branchManager19.message")}, {t("branchManager20.message")}, {t("branchManager21.message")}</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            {t("branchManager22.message")}
            </div>
            <div className='mb-2'>
            {t("branchManager23.message")}
            </div>

            <div >
            {t("branchManager24.message")}









            </div>

            <h6 className='mt-6 text-2xl font-bold'>{t("branchManager25.message")}</h6>
            <div className='mt-4 '>{t("branchManager26.message")}</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '> {t("branchManager27.message")}</li>
                <li className='mt-2 '>{t("branchManager28.message")}</li>
                <li className='mt-2 '>{t("branchManager29.message")}</li>
                <li className='mt-2 '> {t("branchManager30.message")}</li>
                <li className='mt-2 '> {t("branchManager31.message")}</li>
                <li className='mt-2 '>{t("branchManager32.message")}</li>
                <li className='mt-2 '>{t("branchManager33.message")}</li>
                <li className='mt-2 '>{t("branchManager34.message")}</li>
                <li className='mt-2 '> {t("branchManager35.message")} </li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>{t("branchManager36.message")}</h6>
            <div className='mt-4 '>{t("branchManager37.message")}</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '>  {t("branchManager38.message")}</li>
                <li className='mt-2 '>{t("branchManager39.message")}</li>
                <li className='mt-2 '>{t("branchManager40.message")}</li>
                <li className='mt-2 '> {t("branchManager41.message")}</li>
                <li className='mt-2 '>{t("branchManager42.message")}</li>
                <li className='mt-2 '>{t("branchManager43.message")}</li>
                <li className='mt-2 '> {t("branchManager44.message")}</li>
                <li className='mt-2 '>{t("branchManager45.message")}</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>{t("branchManager46.message")}</h6>
            <div className='mt-4 '>{t("branchManager47.message")}</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>{t("branchManager48.message")}</li>
                <li className='mt-2 '> {t("branchManager49.message")} </li>
                <li className='mt-2 '>{t("branchManager50.message")}</li>
                <li className='mt-2 '>{t("branchManager48.message")} </li>
            </ul>

            <Link to = '/career/applicationForm' className='flex items-center justify-center px-4 py-2 rounded-md w-36 md:mt-2 bg-secondary '>
                <FaMailBulk className='ml-1 text-white'/>
               <div className='ml-2 text-white '>{t("branchManager51.message")}</div> 
                </Link>
         </div>

         <div className='mt-6 '>{t("branchManager52.message")}
         {t("branchManager53.message")}  <span className='font-semibold underline text-secondary text-nowrap'>{t("branchManager54.message")}</span> {t('branchManager55')}</div>
    </div>
    </div>
  )
}

export default BranchManager
