
import React from 'react';
import { useTranslation } from 'react-i18next';
  import { BsPhone } from 'react-icons/bs';
   import { BsMailbox } from 'react-icons/bs';
const Branchesc = () => {
 
  const {t} = useTranslation('global')
  return (
    <div className="mx-auto max-w-screen-2xl">
       
       <div className='mx-8 mt-40 md:mt-52 md:mx-24 '>
       <div className='flex justify-center mb-8 font-bold md:justify-start max-w-screen-2xl'>{t('brnch.message')}</div>
         
         <div className='flex flex-col flex-wrap justify-center md:justify-start md:flex-row'>
        <div className='flex flex-col p-2 mb-16 mr-8 text-green-800 border rounded-lg '>
             <div className=' text-primary'>{t('brnch1.message')}</div>
             <div className='mt-4 '>{t('brnch2.message')}</div>
             <div className='flex mt-2 '>
                <div className='text-black '><BsPhone/></div>
                <div className='ml-2 text-sm text-nowrap'>{t('brnch3.message')}</div>
            </div>
             <div className='flex flex-wrap items-center mt-2'>
                <div className='text-black '><BsMailbox/></div>
                <div className='ml-2 '>{t('brnch4.message')}</div>
                </div>
        </div>

        <div className='p-2 mb-16 mr-8 text-green-800 border rounded-lg '>
             <div className=' text-primary'>{t('brnch1.message')}</div>
             <div className='mt-4 '>{t('brnch5.message')}</div>
             <div className='flex mt-2 '>
                <div className='text-black '><BsPhone/></div>
                <div className='ml-2 text-sm text-nowrap'>{t('brnch6.message')}</div>
            </div>
             <div className='flex flex-wrap items-center mt-2'>
                <div className='text-black '><BsMailbox/></div>
                <div className='ml-2'>{t('brnch7.message')}</div>
                </div>
        </div>

        <div className='p-2 mb-16 mr-8 text-green-800 border rounded-lg '>
             <div className=' text-primary'>{t('brnch1.message')}</div>
             <div className='mt-4 '>{t('brnch8.message')}</div>
             <div className='flex mt-2 '>
                <div className='text-black '><BsPhone/></div>
                <div className='ml-2 text-sm text-nowrap'>{t('brnch9.message')}</div>
            </div>
             <div className='flex flex-wrap items-center mt-2'>
                <div className='text-black '><BsMailbox/></div>
                <div className='ml-2 '>{t('brnch10.message')}</div>
                </div>
        </div>

        
        <div className='p-2 mb-16 mr-8 text-green-800 border rounded-lg '>
             <div className=' text-primary'>{t('brnch1.message')}</div>
             <div className='mt-4 '>{t('brnch11.message')}</div>
             <div className='flex mt-2 '>
                <div className='text-black '><BsPhone/></div>
                <div className='ml-2 text-sm'>{t('brnch12.message')}</div>
            </div>
             <div className='flex flex-wrap items-center mt-2'>
                <div className='text-black '><BsMailbox/></div>
                <div className='ml-2'>{t('brnch13.message')}</div>
                </div>
        </div>
        
        </div>
       </div>
    </div>
  );
};

export default Branchesc;
