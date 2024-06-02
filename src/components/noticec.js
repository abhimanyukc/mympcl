import React from 'react';

const Noticec = () => {
  const notices = [
    { text: 'शिल्बन्दी दरभाउ पेश गर्ने सुचना २०८०/१०/११', date: 'FEB 1, 2024' },
    { text: 'शिल्बन्दी दरभाउ पेश गर्ने सुचना २०८०/१०/१२', date: 'FEB 2, 2024' },
    { text: 'शिल्बन्दी दरभाउ पेश गर्ने सुचना २०८०/१०/१३', date: 'FEB 3, 2024' },
];

  return (
    <div className='flex items-center justify-start px-8 py-10 mx-auto max-w-screen-2xl'>
      {notices.map((notice, index) => (
        <div key={index} className='flex flex-col w-40 px-4 py-8 m-1 mt-4 border md:w-64'>
          <div className='text-sm text-primary'>{notice.text}</div>
          <div className='w-20 p-1 mt-2 text-xs text-white border rounded-md bg-secondary hover:bg-blue-800'>
            {notice.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Noticec;
