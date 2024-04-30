import React from 'react';
import Hospitalaffiliationc from '../components/hospitalaffiliationc';
import Combo from '../components/combo';
import Footer from '../components/footer';


const Hospitalaffiliation = () => {
 
    const subtopics = [
        { date: '2024-04-07', text: 'Hospital Affiliation' },
        { date: '2024-04-08', text: 'सुत्केरी पोषण' },
        { date: '2024-04-09', text: 'जीवन बरदान कार्यक्रम' }
    ];

    return (
       
        <div className='container mx-auto mt-8'>
            <Combo/>
            <Hospitalaffiliationc title="Related Health Service" subtopics={subtopics} />
            <Footer/>
        </div>
    );
}

export default Hospitalaffiliation;
