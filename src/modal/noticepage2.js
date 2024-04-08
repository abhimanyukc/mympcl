import React from 'react';

const NoticePageb = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="max-w-lg p-8 bg-white rounded-lg">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h1 className="mb-4 text-2xl font-bold">Notice</h1>
        <p className="text-lg">This is a notice message. You can add your notice content here.</p>
      </div>
    </div>
  );
};

export default NoticePageb;