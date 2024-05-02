import React, { useState, useEffect } from 'react';
import image1 from '../images/bank1.jpg';

import image4 from '../images/bank2.jpeg';

import '../App.css';




const ImageSlider = () => {
 
  const images = [image1,   image4]; // Import images here

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex ((prevIndex) => (prevIndex + 1) % images.length);
   
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
  };




useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex]);

 

  return (
    <div className="relative mx-auto bg-white select-none max-w-screen-2xl">
      <div className='mx-8 mt-2 md:mt-0'>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="object-fill w-full h-40 md:h-120 "
      />
 
      <div className="absolute transform -translate-y-1/2 top-1/2 md:left-14 left-2 group">
        
        <button
          className="hidden p-1 text-indigo-800 border border-indigo-800 rounded md:py-2 md:px-3 focus:outline-none group-hover:bg-indigo-800 group-hover:text-white"
          onClick={prevSlide}
        >
          &#8249;
        </button>
      </div>
     
      <div className="absolute transform -translate-y-1/2 top-1/2 md:right-14 right-2 group">
       
        <button
          className="hidden p-1 text-indigo-800 border border-indigo-600 rounded md:py-2 md:px-3 focus:outline-none group-hover:bg-indigo-600 group-hover:text-white"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
