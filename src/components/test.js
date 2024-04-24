import React, { useState, useEffect } from 'react';

import Footer from '../components/footer'

import Careertest from '../components/career'
import Nav from '../components/nav'
import LoaderR from './loader';


const Careerstest = () => {
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state
  useEffect(() => {
    // Simulate loading data (replace with your actual data fetching logic)
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 5 seconds (adjust as needed)
    }, 5000);
  }, []);
  return (
    <div>
    {isLoading ? (
      <LoaderR /> // Show the loader while loading
    ) : (
      // Your actual career route content
    <div>
      <div className='sticky top-0 left-0 z-20 w-full '>
      <Nav/>
      </div>

      

     <Careertest/>
     <Footer/>
       
    </div>
    )}
    </div>
  )
}

export default Careerstest
