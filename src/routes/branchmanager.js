import React, { useState, useEffect } from 'react';
import BranchManager from '../components/branchmanager'
import Footer from '../components/footer'
import Combo from '../components/combo';
import LoaderAnimate from '../components/loader';


const Branchmanager = () => {
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
          <BranchManager/>
        <Footer/>
    </div>
)}
</div>
  )
}

export default Branchmanager
