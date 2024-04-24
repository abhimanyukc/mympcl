import React from 'react';
import SeniorCitizenHealthCareComponent from '../components/seniorcitizenhealthcarec'
import Seniorcitizenhealthcarecb from '../components/seniorcitizenhealthcarecb';

const SeniorCitizenHealthCare = () => {
  
     
    const subtopics = [
        { date: '2024-04-07', icon: 'M5 12h14M12 5l7 7-7 7', text: 'Hospital Affiliation' },
        { date: '2024-04-08', icon: 'M4 6h16M4 12h16M4 18h16', text: 'सुत्केरी पोषण' },
        { date: '2024-04-09', icon: 'M6 18L18 6M6 6l12 12', text: 'जीवन बरदान कार्यक्रम' }
      ];
  return (
    <div className='px-8 mx-auto mt-4 max-w-screen-2xl md:px-20'>
        <div className='flex flex-col md:flex-row'>
        <div>
        <SeniorCitizenHealthCareComponent
         imageUrl="https://i.pinimg.com/564x/13/ed/4e/13ed4ef0380b52ac16fdfe92da57b54d.jpg"
         description="यसका साथै सदस्य वा परिवार भित्रका सदस्य बिरामी तथा असक्त भई जोखिममा परेका र अस्पतालमा समेत उपचार सेवा दिन नसक्ने भएको वेला थप जेष्ठ नागरिक (SENIOR CITIZEN HEALTH CARE) कार्यक्रम अन्तर्गत मिनी अस्पतालको सेवा दिन अस्पताल बेड, ह्वीलचियर, स्क्रिनपर्दा जस्ता सामाग्री उपलब्ध गराई संस्थाका प्राविधिक कर्मचारी घरैमा गई सुगर प्रेसर चेकजाँच सहितको सेवा समेत उपलब्ध गराउन थालेको छ ।" 
        />
        </div>
    
        
        <div className='container mx-auto mt-8'>
             <Seniorcitizenhealthcarecb
                   title="Related Health Service" subtopics={subtopics} 
             />
        </div>

        </div>
    </div>
  )
}

export default SeniorCitizenHealthCare
