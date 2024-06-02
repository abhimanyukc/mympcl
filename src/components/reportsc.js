import React from 'react';

const reportData = [
  {
    imgSrc: "https://i.pinimg.com/736x/f5/8e/b2/f58eb2633c8ae7ae87fd84131b9421b7.jpg",
    title: "AGM report 2080",
    description: "Report of Gausahar annual general meeting 2080",
    publishedDate: "Published on: April 18, 2023",
  },
  {
    imgSrc: "https://i.pinimg.com/564x/f0/fb/d1/f0fbd17474021f02239a1c4acb3e5e27.jpg",
    title: "AGM report 2079",
    description: "Report of Pratibedhan for Agm",
    publishedDate: "Published on: April 24, 2023",
  },
  {
    imgSrc: "https://i.pinimg.com/736x/2e/c2/6f/2ec26ff1ea2d902b6b67e504773572d8.jpg",
    title: "Annual celebration report 2080",
    description: "Report of Gausahar annual celebration meeting 2080",
    publishedDate: "Published on: April 18, 2023",
  },
  {
    imgSrc: "https://i.pinimg.com/564x/82/9f/80/829f80e573fc4c148e3e27924e7533fd.jpg",
    title: "AGM report for customer related services 2080",
    description: "Report of Gausahar annual meeting for customer services 2080",
    publishedDate: "Published on: April 18, 2023",
  },
  // Add more report objects as needed
];

const Reportsc = () => {
  return (
    <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
      <div className='flex flex-wrap'>
        {reportData.map((report, index) => (
          <div key={index} className='flex flex-col object-fill p-3 mt-4 bg-gray-200 border rounded-md shadow-md md:w-1/3 lg:w-1/4 md:mt-8 md:mr-4'>
            <img alt={report.title} src={report.imgSrc} className="w-full rounded-t-md hover:scale-105 hover:transform-cpu" style={{ width: '100%', height: '200px' }} />
            <div className='p-4'>
              <div className='mb-2 text-lg font-bold'>{report.title}</div>
              <div className='text-gray-700'>{report.description}</div>
              <div className='mt-2 text-gray-600'>{report.publishedDate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reportsc;
