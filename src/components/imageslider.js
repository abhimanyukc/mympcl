import React, { useState, useEffect } from 'react';
import image1 from '../images/slider1.jpg';
import image2 from '../images/slider2.jpeg';
import image3 from '../images/slider3.jpg';
import image4 from '../images/slider4.jpeg';

const ImageSlider = () => {
  const images = [image1, image2, image3, image4]; // Import images here

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex ((prevIndex) => (prevIndex + 1) % images.length);
   
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
  };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000); // Change the duration (in milliseconds) as needed for automatic sliding

//     return () => clearInterval(interval);
//   }, [currentImageIndex]);


useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative max-w-screen-2xl mx-auto">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full"
      />
 
      <div className="absolute top-1/2 left-1 transform  -translate-y-1/2">
        
        <button
          className=" text-white bg-indigo-800 p-2 rounded focus:outline-none "
          onClick={prevSlide}
        >
          &#8249;
        </button>
      </div>
     
      <div className=" absolute top-1/2 right-1 transform -translate-y-1/2">
       
        <button
          className="  text-white bg-indigo-800 p-2 rounded focus:outline-none "
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
