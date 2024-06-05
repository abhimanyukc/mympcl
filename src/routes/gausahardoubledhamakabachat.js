import React, { useState, useEffect } from 'react';
import Gausahardoubledhamakabachatc from '../components/gausahaedoubledhamakabachatc'
import Combo from '../components/combo';
import Footer from '../components/footer';
import LoaderAnimate from '../components/loader';

const Gausahardoubledhamakabachat = () => {

    // const subtopics = [
    //     { date: '2024-04-07', text: 'Debit Card(Atm Service)' },
    //     { date: '2024-04-08', text: 'Free Mobile Banking Service' },
    //     { date: '2024-04-09', text: 'ABBS SERVICE' },
    //     { date: '2024-04-09', text: 'KRAMIK BACHAT' },
    //     { date: '2024-04-09', text: 'SAHARA DOUBLE DHAMAKA BACHAT' },
    // ];

    const [subtopics, setSubTopics] = useState([]);
    useEffect(() => {
         fetch("http://localhost:5000/api/service/")
         .then(response => {
             if(!response.ok){
              throw new Error('response is not ok');
             }
             return response.json();
         })
         .then(data => {
                 const  filteredData = data.filter(item => item.text !== "GauSahar Double Dhamaka Bachat")
             setSubTopics(filteredData);
             setIsLoading(false); 
         })
         .catch(err => {
          console.error('error in fetching double dhamaka api', err);
         })
    }, []);
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
         <div className='container mx-auto mt-8'>
          <Combo/>
        <Gausahardoubledhamakabachatc title="Related Services" subtopics={subtopics} />
          <Footer/>
    </div>
   )}
   </div>
      )
}

export default Gausahardoubledhamakabachat
