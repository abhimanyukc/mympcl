// Import React and necessary modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

const ImageCard = ({ photo, name, post }) => {

  const { t } = useTranslation("global");

  return (
    <div className="w-full p-4 md:w-1/3 lg:w-1/4">
      <div className="overflow-hidden bg-white rounded-lg shadow-md ">
        <img src={photo} alt={name} className="object-cover w-full h-48 transition duration-300 hover:scale-105" />
        <div className="p-4">
          <p className="mb-2 text-xl font-semibold">{t(name)}</p>
          <p className="mb-2 text-xl">{t(post)}</p>
        </div>
      </div>
    </div>
  );
};

const Membershipc = () => {
   const [t, i18n] = useTranslation("global")
 

  const[teams, setTeams]=useState([])


  useEffect(()=>{
    axios.get('http://192.168.1.97:8000/api/team')
    .then(response => {
      console.log(response.data.data); // Log data to the console
      setTeams(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [])

  
  
  return (
    
     
    <div className='mx-auto max-w-screen-2xl'>

      <div className='flex flex-col justify-center mx-6 mt-20 md:mx-20 '> 

      <div className='flex justify-center w-5/6 mx-4 my-8 font-bold md:mx-16'>{t('mem1.message')}</div>
      
      <div className="flex flex-wrap justify-center">
      {Array.isArray(teams) && teams[0].map((card, index) => 
        <ImageCard key={index} {...card} />
      )}
    </div>

    </div>
    </div>
  );
};

export default Membershipc;