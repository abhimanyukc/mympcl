import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RealestateLoanc from '../components/realestateloanc';
import Combo from '../components/combo';
import Footer from '../components/footer';
import LoaderAnimate from '../components/loader';
import { useLocation } from 'react-router-dom';

const RealestateLoan = () => {
    const [realEstateLoans, setRealEstateLoans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        axios.get("http://localhost:5000/api/loan/")
            .then(response => {
                const data = response.data;

                // Get the current route and the specific part for sorting
                const currentRoute = location.pathname;
                const targetRoute = currentRoute.split('/').pop();

                // Sort the data to prioritize the specific loan type based on the route
                data.sort((a, b) => {
                    if (a.route.includes(targetRoute)) return -1;
                    if (b.route.includes(targetRoute)) return 1;
                    return a.route.localeCompare(b.route);
                });

                setRealEstateLoans(data);
            })
            .catch(err => {
                console.error("Error in fetching data", err);
            });
    }, [location.pathname]);

    useEffect(() => {
        // Simulate loading data (replace with your actual data fetching logic)
        setTimeout(() => {
            setIsLoading(false); // Set loading state to false after 2 seconds (adjust as needed)
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading ? (
                <LoaderAnimate /> // Show the loader while loading
            ) : (
                <div>
                    <Combo />
                    <RealestateLoanc realEstateLoans={realEstateLoans} />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default RealestateLoan;
