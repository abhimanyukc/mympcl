 import React from 'react'
 import { useTranslation } from 'react-i18next'
 const Informationc = () => {
  const [t, i18n] = useTranslation('global')
   return (
     <div className='mx-auto max-w-screen-2xl '>

       
       <div className='flex flex-col px-8 mt-4 md:mt-10 md:flex-row '>

       <div className='flex flex-col w-full pb-4 md:w-3/4 md:mr-8 md:h-1/2'>
        <div className='mb-4 font-bold'>{t("info.message")}</div>
        <div>{t("info1.message")}</div>
        <div className=''> <img
            src={require('../images/slider10.png')}
            alt='Online account service'
            className='object-fill w-full p-1 my-2 md:m-2 h-1/2 md:h-1/2 rounded-xl md:mt-3 md:mx-0'
          /></div>
          <div className='md:mt-4'>
          {t("info2.message")}
          </div> 
          <div className='pt-4 font-bold'>{t("info3.message")}</div>
          <div>{t("info4.message")}</div>
           <div className='pt-4 font-bold'>{t("info5.message")}</div>
           <div>{t("info6.message")}</div>
       </div>

        <div  className='flex flex-col md:w-1/4 '>
          <div className='p-1 border-b-2'>
            <p>{t("services1.message")}</p>
          </div>

          <div className='p-1 border-b-2'>
            <p>{t("services2.message")}</p>
          </div>

          <div className='p-1 border-b-2'>
            <p>{t("services3.message")} </p>
          </div>

          <div className='p-1 border-b-2'>
            <p>{t("services4.message")}</p>
          </div>

          <div  className='p-1 border-b-2'>
            <p>{t("services5.message")}</p>
          </div>

          <div className='p-1 border-b-2'>
            <p>{t("services6.message")}</p>
          </div>

        

        </div>

       </div>
     </div>
   )
 }
 
 export default Informationc

