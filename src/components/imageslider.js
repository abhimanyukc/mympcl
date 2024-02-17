import React, { useState, useEffect } from 'react';
import image1 from '../images/slider1.jpg';

import image4 from '../images/slider4.jpeg';








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
    <div className="relative mx-auto max-w-screen-2xl">
      <div className='mx-4 md:mx-20 '>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full"
      />
 
      <div className="absolute transform -translate-y-1/2 top-1/2 md:left-12 left-6">
        
        <button
          className="p-1 text-white bg-indigo-800 rounded md:p-2 focus:outline-none"
          onClick={prevSlide}
        >
          &#8249;
        </button>
      </div>
     
      <div className="absolute transform -translate-y-1/2 top-1/2 md:right-12 right-6">
       
        <button
          className="p-1 text-white bg-indigo-800 rounded md:p-2 focus:outline-none"
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
