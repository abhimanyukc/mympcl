import React, { useState, useEffect } from 'react';
import Debitcardatmservicec from '../components/debitcardatmservicec'
import Combo from '../components/combo';
import Footer from '../components/footer';
import LoaderAnimate from '../components/loader';


const Debitcardatmservice = () => {

    const subtopics = [
        { date: '2024-04-07', text: 'Hospital Affiliation' },
        { date: '2024-04-08', text: 'सुत्केरी पोषण' },
        { date: '2024-04-09', text: 'Senior Citizen Health Care' }
    ];

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
         <div className=''>
          <Combo/>
        <Debitcardatmservicec title="Related Services" subtopics={subtopics} />
        <Footer/>
    </div>
   )}
   </div>
      )
}

export default Debitcardatmservice
