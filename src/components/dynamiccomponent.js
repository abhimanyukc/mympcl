import React, { useState, useEffect } from 'react';
import LoaderR from '../routes/loader';

const Dynamiccomponentc = ({title}) => {
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state
  useEffect(() => {
    // Simulate loading data (replace with your actual data fetching logic)
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 5 seconds (adjust as needed)
    }, 2000);
  }, []);
  return (
    <div>
    {isLoading ? (
      <LoaderR /> // Show the loader while loading
    ) : (
    <div className='px-6 mx-auto opacity-80 bg-gradient-to-r from-green-800 to-green-500 max-w-screen-2xl '> 

    <div className='flex items-center px-4 py-10 opacity-100 '>
     <div className='mr-2 text-white'>Home</div>
     <div className='mr-2 text-white'> /</div>
     <div className='text-white '>  {title}</div>
    </div>   
    </div>
    )}
    </div>
  )
}
export default Dynamiccomponentc
