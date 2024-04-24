import React from 'react';

const Reportsc = () => {
  return (
    <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
      <div className='flex flex-wrap '>
        {/* Card 1 */}
        <div className='flex flex-col object-fill p-4 mt-4 bg-gray-200 border rounded-md shadow-md md:w-1/2 lg:w-1/4 md:mt-8 md:mr-4'>
          <img alt="report1" src="https://i.pinimg.com/736x/f5/8e/b2/f58eb2633c8ae7ae87fd84131b9421b7.jpg" className="w-full rounded-t-md hover:scale-105 hover:transform-cpu"  style={{ width: '100%', height: '200px' }}/>
          <div className='p-4'>
            <div className='mb-2 text-lg font-bold'>AGM report 2080</div>
            <div className='text-gray-700'>Report of Gausahar annual general meeting 2080</div>
            <div className='mt-2 text-gray-600'>Published on: April 18, 2023</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col object-fill p-4 mt-4 bg-gray-200 border rounded-md shadow-md md:w-1/2 lg:w-1/4 md:mt-8 md:mr-4'>
          <img alt="report1" src="https://i.pinimg.com/564x/f0/fb/d1/f0fbd17474021f02239a1c4acb3e5e27.jpg" className="w-full rounded-t-md hover:scale-105 hover:transform-cpu" style={{ width: '100%', height: '200px' }} />
          <div className='p-4'>
            <div className='mb-2 text-lg font-bold'>AGM report 2079</div>
            <div className='text-gray-700'>Report of Pratibedhan for Agm</div>
            <div className='mt-2 text-gray-600'>Published on: April 24, 2023</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col object-fill p-4 mt-4 bg-gray-200 border rounded-md shadow-md md:w-1/2 lg:w-1/4 md:mt-8 md:mr-4'>
          <img alt="report1" src="https://i.pinimg.com/736x/2e/c2/6f/2ec26ff1ea2d902b6b67e504773572d8.jpg" className="w-full hover:scale-105 hover:transform-cpu rounded-t-md" style={{ width: '100%', height: '200px' }} />
          <div className='p-4'>
            <div className='mb-2 text-lg font-bold'>Annual celebration report 2080</div>
            <div className='text-gray-700'>Report of Gausahar annual celebration meeting 2080</div>
            <div className='mt-2 text-gray-600'>Published on: April 18, 2023</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className='flex flex-col object-fill p-4 mt-4 bg-gray-200 border rounded-md shadow-md md:w-1/2 lg:w-1/4 md:mt-8'>
          <img alt="report1" src="https://i.pinimg.com/564x/82/9f/80/829f80e573fc4c148e3e27924e7533fd.jpg" className="w-full hover:scale-105 hover:transform-cpu rounded-t-md" style={{ width: '100%', height: '200px' }} />
          <div className='p-4'>
            <div className='mb-2 text-lg font-bold'>AGM report for customer related services 2080</div>
            <div className='text-gray-700'>Report of Gausahar annual meeting for customer services 2080</div>
            <div className='mt-2 text-gray-600'>Published on: April 18, 2023</div>
          </div>
        </div>


        {/* Add more card containers if needed */}
      </div>
    </div>
  );
};

export default Reportsc;
