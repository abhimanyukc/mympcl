// Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const [t]  = useTranslation('global')
  return (
    <footer className="p-8 mx-auto text-white bg-indigo-800 select-none md:mt-8 md:py-8 max-w-screen-2xl md:px-24">
      <div className="container flex flex-col items-center justify-center md:p-0 md:justify-between md:flex-row">
        <div className="mb-4 md:mb-0 ">
          <h2 className="text-lg font-semibold">गाउसहर बहुउदेस्यिय सहकारि सस्था लि  पोखरा-८,  कास्कि </h2>
          <p className="text-sm">{t('fo1.message')}</p>
        </div>

        <div className="flex flex-col items-start justify-center md:space-x-4 md:items-center md:flex-row">
          <div className='mt-4'>
            <h3 className="text-lg font-semibold ">{t('fo.message')}</h3>
            <p>{t('fo2.message')}</p>
            <p>{t('fo3.message')}</p>
          </div>

          <div className='mt-4 mb-2 md:mt-0'>
            <h3 className="text-lg font-semibold">{t('fo4.message')}</h3>
            <p>{t('fo5.message')}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-gray-600">
        <div className="container mx-auto text-sm text-center">
          <div>&copy; {new Date().getFullYear()} गाउसहर बहुउदेस्यिय सहकारि सस्था लि  पोखरा-८,  कास्कि</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

