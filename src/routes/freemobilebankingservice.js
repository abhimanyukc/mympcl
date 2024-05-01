import React, { useState, useEffect } from 'react';
import Freemobilebankingservicec from '../components/freemobilebankingservicec'
import Combo from '../components/combo';
import Footer from '../components/footer';
import LoaderAnimate from '../components/loader';


const Freemobilebankingservice = () => {

  const subtopics = [
    { date: '2024-04-07', text: 'Debit Card(Atm Service)' },
    { date: '2024-04-08', text: 'SMS Service' },
    { date: '2024-04-09', text: 'ABBS Service' },
    { date: '2024-04-10', text: 'KRAMIK BACHAT' },
    { date: '2024-04-11', text: 'SAHARA DOUBLE DHAMAKA BACHAT' },
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
    <Freemobilebankingservicec title="Related Services" subtopics={subtopics} />
      <Footer/>
</div>
)}
</div>
  )
}

export default Freemobilebankingservice
