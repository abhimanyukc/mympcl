import React from 'react'
import LifeBlessingProgramComponent from '../components/LifeBlessingProgramComponent'

const LifeBlessingProgram = () => {
  const subtopics = [
    { date: '2024-04-07', text: 'Hospital Affiliation' },
    { date: '2024-04-08', text: 'सुत्केरी पोषण' },
    { date: '2024-04-09', text: 'Senior Citizen Health Care' }
];
  return (
     <div className='container mx-auto mt-8'>
    <LifeBlessingProgramComponent title="Life Blessing Program" subtopics={subtopics} />
</div>
  )
}

export default LifeBlessingProgram
