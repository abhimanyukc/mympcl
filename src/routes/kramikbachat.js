import React, { useState, useEffect } from 'react';
import Kramikbachatc from '../components/kramikbachatc';
import Combo from '../components/combo';
import Footer from '../components/footer';
import LoaderAnimate from '../components/loader';


const Kramikbachat = () => {
 
    const subtopics = [
        { date: '2024-04-07', text: 'Debit Card(Atm Service)' },
        { date: '2024-04-08', text: 'Free Mobile Banking Service' },
        { date: '2024-04-09', text: 'ABBS SERVICE' },
        { date: '2024-04-09', text: 'KRAMIK BACHAT' },
        { date: '2024-04-09', text: 'SAHARA DOUBLE DHAMAKA BACHAT' },
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
        <Kramikbachatc title="Related Services" subtopics={subtopics} />
        <Footer/>
    </div>
    )}
    </div>
      )
}

export default Kramikbachat