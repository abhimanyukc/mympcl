import React from 'react';
import { useTranslation } from 'react-i18next';

const NoticePage = ({ onClose }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mx-auto overflow-y-auto bg-gray-900 bg-opacity-50 max-w-screen-2xl">
      <div className="w-full h-full p-8 bg-white rounded-lg  md:w-5/6">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h1 className="mb-4 text-2xl font-bold">{t("noticePage.message")}</h1>
        <p className="text-lg">{t("noticePage1.message")} </p>
        
        <img src="https://i.pinimg.com/564x/af/de/3e/afde3e23950d74f7df7ba12b7a22db9b.jpg" alt="" className='object-cover w-full mt-4 h-5/6'/>
      </div>
    </div>
  );
};

export default NoticePage;
