import React from 'react'

const SeniorCitizenHealthCareComponent = ({imageUrl, description }) => {
  return (
      <div className=''>
      
        <div className='w-full md:ml-4 md:w-4/5 '>
    <div className="overflow-hidden rounded shadow-lg ">
    <img className="w-full" src={imageUrl} alt="Description" />
    <div className="px-6 py-4">
      <p className="text-base text-gray-700">{description}</p>
    </div>
  </div>
  </div>
    
 

      
    </div>
  )
}
export default SeniorCitizenHealthCareComponent

