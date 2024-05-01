import React, { useState, useEffect } from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'

import Combo from '../components/combo';
import LoaderAnimate from '../components/loader';
import ComplianceOfficer from '../components/complianceofficerc';



const ComplianceOfficerRoute = () => {
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
    <div>
         <Combo/>
       <ComplianceOfficer/>
        <Footer/>
    </div>
)}
</div>


  )
}

export default  ComplianceOfficerRoute
