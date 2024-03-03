import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
const Emicalculatorc = () => {
  const [t,i18n] = useTranslation("global")
  return (
    <div className='mx-auto bg-white bg-green-800 select-none max-w-screen-2xl '>
      <div className='flex flex-col justify-center md:space-x-8 md:flex-row md:px-24 md:py-2'>
        <div className='flex flex-col items-center px-8 md:px-0 md:items-start'>
          <div className='mt-8 mb-4 text-black'> {t("emi.message")}</div>
          <div className="flex flex-col items-center justify-center w-full p-5 bg-green-800 border md:flex-row md:flex-wrap ">
            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
              <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>{t("emi1.message")}</div>
            </div>
            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>{t("emi2.message")}</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'> {t("emi3.message")}</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>{t("emi4.message")}</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half '>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-center text-white'>{t("emi5.message")}</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-center text-white'>{t("emi6.message")}</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center my-8 md:items-center'>
          <div className='mb-2 text-center text-black'>{t("emi7.message")}</div>
          <div className="flex items-center p-6 mx-auto bg-green-800 w-half md:h-full md:mt-4 md:px-20">
            <div className='flex flex-col md:flex-col'>
              <div className='text-white ' >{t("emi8.message")}</div>
              <select className=''>
                <option className=''>{t("emi9.message")}</option>
                <option>{t("emi1.message")}</option>
                <option>{t("emi2.message")}</option>
                  <option>{t("emi3.message")}</option>
                  <option>{t("emi4.message")}</option>
                  <option className=''>{t("emi5.message")}</option>
                  <option className=''>{t("emi6.message")}</option>
              </select>

              <div  className='text-white '>{t("emi10.message")}</div>
              <input type="text" className='p-1 border' />

              <div className='text-white '>{t("emi11.message")}</div>
              <input type="text" className='p-1 border' />

              <div className='text-white '>{t("emi12.message")}</div>
              <input type="text" className='p-1 border' />

              <div className='text-white '>{t("emi13.message")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emicalculatorc;