import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FemaleNutritionComponent from '../components/FemaleNutritionC'
import Combo from '../components/combo';
import Footer from '../components/footer';
import LoaderAnimate from '../components/loader';


const FemaleNutrition = () => {

//   const subtopics = [
//     { date: '2024-04-07', text: 'Female Nutrition' },
//     { date: '2024-04-08', text: 'सुत्केरी पोषण' },
//     { date: '2024-04-09', text: 'जीवन बरदान कार्यक्रम' }
// ];
   const [subtopics, setSubTopics] =  useState([]);

   useEffect(() => {
       axios.get("http://localhost:5000/api/femaleNutrition/")
       .then(response => {
         setSubTopics(response.data);
       })
       .catch(error => {
        console.error(' Error fetching data:', error);
       })
   }, [])

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
            <FemaleNutritionComponent title="Female Nutrition Service" subtopics={subtopics} />
        <Footer/>
        </div>
)}
</div>
  )
}

export default FemaleNutrition
