import React from 'react'
import { MdDateRange } from 'react-icons/md'

const Seniorcitizenhealthcarecb = ({title, subtopics}) => {
  return (
    <div>
       <div className="w-full p-4 bg-gray-100 rounded-lg shadow-md md:p-8">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      {subtopics.map((subtopic, index) => (
        <div key={index} className="flex items-center mb-2">
            <div className='flex flex-col'>
            <div className='text-sm'>{subtopic.text}</div>
            <div className="flex items-center">
                    {/* Using MdDateRange icon component */}
                    <MdDateRange className="w-6 h-6 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm">{subtopic.date}</p>
                    </div>
                  </div>
          </div>
          
        </div>
      ))}
    </div>
    </div>
  )
}

export default Seniorcitizenhealthcarecb
