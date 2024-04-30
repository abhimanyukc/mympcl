import React from 'react';
import LifeBlessingProgramComponent from '../components/LifeBlessingProgramComponent'
import Combo from '../components/combo';
import Footer from '../components/footer';


const LifeBlessingProgram = () => {

  const subtopics = [
    { date: '2024-04-07', text: 'Hospital Affiliation' },
    { date: '2024-04-08', text: 'सुत्केरी पोषण' },
    { date: '2024-04-09', text: 'Senior Citizen Health Care' }
];
  return (
   
     <div className='container mx-auto mt-8'>
      <Combo/>
    <LifeBlessingProgramComponent title="Life Blessing Program" subtopics={subtopics} />
      <Footer/>
</div>
  )    
}

export default LifeBlessingProgram
