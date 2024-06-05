//passing value using props from parent component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EducationalLoanc from '../components/educationalloan'
import Combo from '../components/combo';
import Footer from '../components/footer';
import LoaderAnimate from '../components/loader';
import { useLocation } from 'react-router-dom';

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
        const location =useLocation();

        useEffect(() => {
          axios.get("http://localhost:5000/api/loan/")
          .then(response =>{
                   const data = response.data;

                   //get the current route and the specific part for sorting
                   const currentRoute = location.pathname;
                   const targetRoute = currentRoute.split('/').pop();
                   //his line of code processes the currentRoute to extract the last segment of the path.
                   //currentRoute.split('/') splits the pathname string into an array of substrings, using the forward slash (/) as the delimiter. 
                   //.pop() is then called on the array, which removes and returns the last element of the array. In the example, this would be "settings".

                   
                // Sort the data to prioritize the specific loan type based on the route
                data.sort((a, b) => {
                  if (a.route.includes(targetRoute)) return -1;
                  if (b.route.includes(targetRoute)) return 1;
                  return a.route.localeCompare(b.route);
              });
                  setEducationalLoans(data);
          })
          .catch(err => {
            console.err("Error in fetching data", err);
          })
        }, [location.pathname]);

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
