import React, { useEffect, useRef } from 'react';
import { FaAngleRight } from 'react-icons/fa';

const AnimatedValue = ({ value, label }) => {
  const animatedValueRef = useRef(null);

  useEffect(() => {
    const animatedValue = animatedValueRef.current;

    let startValue = 0;
    const endValue = parseInt(value.replace(/,/g, '')); // Remove commas and convert to integer
    const duration = 4000; // Animation duration in milliseconds
    const increment = (endValue - startValue) / (duration / 1000); // Calculate increment per second

    const updateValue = () => {
      startValue += increment;
      animatedValue.textContent = new Intl.NumberFormat().format(Math.floor(startValue));
      if (startValue < endValue) {
        requestAnimationFrame(updateValue);
      }
    };

    updateValue();

    return () => {
      // Cleanup on component unmount
      cancelAnimationFrame(updateValue);
    };
  }, [value]);

  return (
    <div className='flex mx-8 mt-4'>
      <div className='object-fill w-8 h-12 mr-2'>
        <FaAngleRight />
      </div>
      <div className='flex flex-col ml-2'>
        <div ref={animatedValueRef}>0</div>
        <div>{label}</div>
      </div>
    </div>
  );
};

const Account = () => {
  return (
    <div className='px-5 py-12 mx-auto font-sans bg-white select-none max-w-screen-2xl md:px-20 md:py-8'>
      {/* ... other content ... */}
      <div className='flex flex-col '>
        <div className='flex w-20 mx-auto mb-12 text-center text-white bg-primary'>
          View More
        </div>

        <div className='w-11/12 mx-auto md:w-full bg-primary md:m-4 md:flex-row'>
          <AnimatedValue value="70,087,500" label="Capital" />
          <AnimatedValue value="514,169,286" label="Assets" />
          <AnimatedValue value="275,015,063" label="Deposit" />
          <AnimatedValue value="9,967" label="Members" />
          <AnimatedValue value="986,073,515" label="Reserve Fund" />
        </div>
        {/* ... other content ... */}
      </div>
    </div>
  );
};

export default Account;
