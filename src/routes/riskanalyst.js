import React, { useState, useEffect } from 'react';
import Footer from '../components/footer'
import RiskAnalyst from '../components/riskanalystc'
import Combo from '../components/combo'
import LoaderAnimate from '../components/loader';


const RiskAnalystRoute = () => {
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
 <LoaderAnimate/> // Show the loader while loading
) : (
    <div>
         <Combo/>
        <RiskAnalyst/>
        <Footer/>
    </div>
)}
</div>
   
  )
}

export default  RiskAnalystRoute
