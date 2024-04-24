import React  from 'react';
import FemaleNutritionComponent from '../components/FemaleNutritionC'


const FemaleNutrition = () => {

  const subtopics = [
    { date: '2024-04-07', text: 'Female Nutrition' },
    { date: '2024-04-08', text: 'सुत्केरी पोषण' },
    { date: '2024-04-09', text: 'जीवन बरदान कार्यक्रम' }
];
  return (
  
    <div className='container mx-auto mt-8'>
            <FemaleNutritionComponent title="Female Nutrition Service" subtopics={subtopics} />
        </div>

  )
}

export default FemaleNutrition
