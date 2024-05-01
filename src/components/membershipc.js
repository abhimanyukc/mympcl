// Import React and necessary modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

const ImageCard1 = ({ name, position, imageUrl }) => {
  const { t } = useTranslation("global");

  return (
    <div className="w-full p-4 md:w-1/3 lg:w-1/4">
      <div className="overflow-hidden bg-white rounded-lg shadow-md ">
        <img src={imageUrl} alt={name} className="object-cover w-full h-48 transition duration-300 hover:scale-105" />
        <div className="p-4">
          <p className="mb-2 text-xl font-semibold">{t(name)}</p>
          <p className="mb-2 text-xl">{t(position)}</p>
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ photo, name, post }) => {


  return (
    <div className="w-full p-4 md:w-1/3 lg:w-1/4">
      <div className="overflow-hidden bg-white rounded-lg shadow-md ">
        <img src={photo} alt={name} className="object-cover w-full h-48 transition duration-300 hover:scale-105" />
        <div className="p-4">
          <p className="mb-2 text-xl font-semibold">{name}</p>
          <p className="mb-2 text-xl">{post}</p>
        </div>
      </div>
    </div>
  );
};


const Membershipc = () => {
  
 
  const [t, i18n] = useTranslation("global")
  const imageCardsi  = [
    { name: 'mem17.message',position:'mem11.message', imageUrl: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }

  ]

  const[teams, setTeams]=useState({})


  useEffect(()=>{
    axios.get('http://192.168.1.97:8000/api/team')
    .then(response => {
      console.log(response.data.data); // Log data to the console
      setTeams(response.data.data.teams);
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
      {imageCardsi.map((card, index) => 
        <ImageCard1 key={index} {...card} />
      )}
    </div>


      <div className="flex flex-wrap justify-center">
      {Array.isArray(teams) && teams.map((card, index) => 
        <ImageCard key={index} {...card} />
      )}
    </div>

    </div>
    </div>
  );
};

export default Membershipc;