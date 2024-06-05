//passing value using props from parent component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EducationalLoanc from '../components/educationalloan'
import Combo from '../components/combo';
import Footer from '../components/footer';
import LoaderAnimate from '../components/loader';


const EducationalLoan = () => {


        //sample data for loans
        // const educationalLoans = [
        //     {
        //         image: 'https://i.pinimg.com/564x/3d/ad/b2/3dadb2c797b6a4563c7bb0f0c37c1bbb.jpg',
        //         title: 'Educational Loan',
        //         description: 'Educational Loan',
        //         route: 'loan/educationalloan'
        //     },
        //     {
        //         image:'https://i.pinimg.com/564x/b8/70/39/b8703970871f0b2a88adb098a5732154.jpg',
        //         title: 'Business Loan',
        //         description: 'Business Loan',
        //         route: 'loan/businessloan'
        //     },
           
        //     {
        //         image: 'https://i.pinimg.com/564x/f4/87/06/f487066a47c350e4913507c291e6c2cd.jpg',
        //         title: 'Real Estate Loan',
        //         description: 'Real Estate Loan',
        //         route: 'loan/realestateloan'
        //     }
        //    ]

        const [educationalLoans, setEducationalLoans] = useState([]);

        useEffect(() => {
          axios.get("http://localhost:5000/api/loan/")
          .then(response =>{
                   const data = response.data;
                   //sort the data by the route property
                   data.sort((a,b) => a.route.localeCompare(b.route))
                  setEducationalLoans(data);
          })
          .catch(err => {
            console.err("Error in fetching data", err);
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
    <div>
        <Combo/>
           {/* Pass educationalLoans data as prop to educationalLoans component */}
        <EducationalLoanc educationalLoans={educationalLoans}/>
        <Footer/>
    </div>
)}
</div>
  )
}

export default EducationalLoan;
