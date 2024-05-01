import React, { useState, useEffect } from 'react';
import Footer from '../components/footer'
import Gallery3C from '../components/galleryc3'
import Combo from '../components/combo';
import LoaderAnimate from '../components/loader';
const Gallery3 = () => {
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
 <LoaderAnimate /> // Show the loader while loading
) : (
      <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>    
        <Combo/>
       <Gallery3C/>
     <Footer/>
    </div>
)}
    </div>
  )
}

export default Gallery3
