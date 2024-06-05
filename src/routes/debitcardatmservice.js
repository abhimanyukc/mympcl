import React, { useState, useEffect } from 'react';
import Debitcardatmservicec from '../components/debitcardatmservicec'
import Combo from '../components/combo';
import Footer from '../components/footer';
import LoaderAnimate from '../components/loader';


const Debitcardatmservice = () => {

    // const subtopics = [
    //     { date: '2024-04-07', text: 'Free Mobile Banking Service' },
    //     { date: '2024-04-08', text: 'Sms Service' },
    //     { date: '2024-04-09', text: 'ABBS Service' },
    //     { date: '2024-04-09', text: 'Kramik Bachat' },
    //     { date: '2024-04-09', text: 'GauSahar Double Dhamaka Bachat' }
    // ];

     const [subtopics, setSubtopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state


    useEffect(() => {
      //fetch data from the api
      fetch('http://localhost:5000/api/service/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // filter out "Debit Card(ATM Service)" data
          const filteredData = data.filter(item => item.text !== "Debit Card(ATM Service)");
          setSubtopics(filteredData);
          setIsLoading(false);   
      })
      .catch(error => {
        console.error('Error fetching data', error);
        setIsLoading(false);    
      })
    }, [])  
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
