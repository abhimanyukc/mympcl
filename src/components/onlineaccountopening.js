import React from 'react'
import { useTranslation } from 'react-i18next'
const Onlineaccountopening = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <div className='mx-auto bg-white select-none max-w-screen-2xl'>
         <div className='flex flex-col w-full px-8 pt-20 md:flex-row md:pt-32'>

         <div className='w-full md:w-1/2 md:mr-8'>  <img
            src={require('../images/bank1.jpg')}
            alt='Online account service'
            className='object-fill w-full h-full'
          /></div>

         <div className='flex flex-col w-full md:w-1/2'>
         <div className='mt-2 text-2xl font-bold '></div>
         <div className='mt-2 font-sans'>
           {t("onlineacc.message")}
         </div>
         <button className='flex items-start justify-center w-24 mt-4 text-white bg-green-800 border rounded-md text-nowrap'>{t("onlineacc1.message")}</button>
         </div>
         
         </div>

    </div>
  )
}

export default Onlineaccountopening
