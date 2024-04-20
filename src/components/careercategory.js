import React from 'react'
import { FaPodcast , FaClock, FaLocationArrow , FaUser ,  FaMoneyBill} from 'react-icons/fa'
const Careercategory = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl md:px-24'>
      
      <div className='mt-8 mb-8 '>
      <div className='text-lg font-bold md:text-4xl '>
        Engineering Jobs at Gausahar Sahakari
      </div>
       
       <div className='flex flex-col px-3 py-4 mt-4 border shadow-md hover:bg-gray-100'>
      <div className='flex flex-col mb-2 md:flex-row md:justify-between'>
        <div className='mr-2 text-primary '>Senior QA Engineer/Software Engineer</div>
        <div className='flex items-center '>
         <FaPodcast/>
         <div className=' text-nowrap'>12 May 2024</div>
         </div>
      </div>
      <div className='md:flex md:flex-wrap '>
            <div className='flex items-center mr-4 '>
                <FaClock className='mr-1'/>  <div>Full Time</div>
            </div>
            <div className='flex items-center mr-4 '>
                <FaLocationArrow className='mr-1 '/> <div>Kathmandu and Pokhara</div>
            </div>
            <div className='flex items-center mr-4 '>
                <FaUser className='mr-1 '/> <div>2 openings</div>
            </div>
            <div className='flex items-center '>
                <FaMoneyBill className='mr-1 '/> <div>70,000-130,000</div>
            </div>
     </div>


     <div className='flex flex-col mt-2 md:flex-row md:flex-wrap '>
        <p className='w-48 p-1 mb-2 font-sans text-gray-800 bg-gray-200 border-b-2 shadow-lg md:mt-2 md:mr-4 '>Automated testing tools</p>
        <p className='w-48 p-1 mb-2 font-sans text-gray-800 bg-gray-200 border-b-2 shadow-lg md:mr-4 md:mt-2'>Functional testing tools</p>
        <p className='w-48 p-1 mb-2 font-sans text-gray-800 bg-gray-200 border-b-2 shadow-lg md:mt-2 md:mr-4'>Issue tracking tools</p>
        <p className='w-48 p-1 mb-2 font-sans text-gray-800 bg-gray-200 border-b-2 shadow-lg md:mt-2'>Attention to Detail</p>
     </div>
      </div>

      <div className='flex flex-col px-3 py-4 mt-4 border shadow-md hover:bg-gray-100'>
      <div className='flex flex-col mb-2 md:flex-row md:justify-between'>
        <div className='mr-2 text-primary text-nowrap'>Senior QA Engineer</div>
        <div className='flex items-center '>
         <FaPodcast/>
         <div className=' text-nowrap'>12 May 2024</div>
         </div>
      </div>
      <div className='md:flex md:flex-wrap '>
            <div className='flex items-center mr-4 '>
                <FaClock className='mr-1'/>  <div>Full Time</div>
            </div>
            <div className='flex items-center mr-4 '>
                <FaLocationArrow className='mr-1 '/> <div>Kathmandu and Pokhara</div>
            </div>
            <div className='flex items-center mr-4 '>
                <FaUser className='mr-1 '/> <div>2 openings</div>
            </div>
            <div className='flex items-center '>
                <FaMoneyBill className='mr-1 '/> <div>70,000-130,000</div>
            </div>
     </div>


     <div className='flex flex-col mt-2 md:flex-row md:flex-wrap '>
        <p className='w-48 p-1 mb-2 font-sans text-gray-800 bg-gray-200 border-b-2 shadow-lg md:mt-2 md:mr-4 '>Automated testing tools</p>
        <p className='w-48 p-1 mb-2 font-sans text-gray-800 bg-gray-200 border-b-2 shadow-lg md:mr-4 md:mt-2'>Functional testing tools</p>
        <p className='w-48 p-1 mb-2 font-sans text-gray-800 bg-gray-200 border-b-2 shadow-lg md:mt-2 md:mr-4'>Issue tracking tools</p>
        <p className='w-48 p-1 mb-2 font-sans text-gray-800 bg-gray-200 border-b-2 shadow-lg md:mt-2'>Attention to Detail</p>
     </div>
      </div>

      <div className='flex flex-col px-3 py-6 mt-4 mb-4 border shadow-md hover:bg-gray-100 '>
      <div className='flex flex-col mb-2 md:flex-row md:justify-between'>
        <div className='mr-2 text-primary text-nowrap'>Web Backend Developer</div>
        <div className='flex items-center '>
         <FaPodcast/>
         <div className=' text-nowrap'>Hiring Completed</div>
         </div>
      </div>
      <div className='md:flex md:flex-wrap '>
            <div className='flex items-center mr-4 '>
                <FaClock className='mr-1'/>  <div>Full Time</div>
            </div>
            <div className='flex items-center mr-4 '>
                <FaLocationArrow className='mr-1 '/> <div>Kathmandu and Pokhara</div>
            </div>
            <div className='flex items-center mr-4 '>
                <FaUser className='mr-1 '/> <div>2 openings</div>
            </div>
            <div className='flex items-center '>
                <FaMoneyBill className='mr-1 '/> <div>40,000-80,000</div>
            </div>
     </div>

      </div>

      </div>
    </div>
  )
}

export default Careercategory
