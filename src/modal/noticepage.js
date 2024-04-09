import React from 'react';

const NoticePage = ({ onClose }) => {
  return (
    <div className="fixed max-w-screen-2xl mx-auto  inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-y-auto">
      <div className="  h-full  md:w-5/6  w-full p-8 bg-white rounded-lg">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h1 className="mb-4 text-2xl font-bold">Notice</h1>
        <p className="text-lg">GauSahar Sahakari Notice. </p>
        
        <img src="https://i.pinimg.com/564x/af/de/3e/afde3e23950d74f7df7ba12b7a22db9b.jpg" alt="" className='w-full h-5/6 object-cover mt-4'/>
      </div>
    </div>
  );
};

export default NoticePage;
