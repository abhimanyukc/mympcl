import React from 'react'
import { FaFilePdf,FaFileDownload } from 'react-icons/fa'
const  Downloadsc= () => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
       <div className='flex items-center justify-between px-8 mt-10 '>
      <div className='flex '>
        <div className=' text-primary'><FaFilePdf className='md:w-12 md:h-8'/></div>
        <div>Atm Registration Form</div>
      </div>
      <div className='flex text-primary'><FaFileDownload className='md:h-6 md:w-8'/></div>
      </div>

      <div className='flex items-center justify-between px-8 mt-4 '>
      <div className='flex '>
        <div className=' text-primary'><FaFilePdf className='md:w-12 md:h-8'/></div>
        <div>Online Account Opening Form</div>
      </div>
      <div className='flex text-primary'><FaFileDownload className='md:h-6 md:w-8'/></div>
      </div>

      <div className='flex items-center justify-between px-8 mt-4 '>
      <div className='flex '>
        <div className=' text-primary'><FaFilePdf className='md:w-12 md:h-8'/></div>
        <div>Demat Account Opening Form</div>
      </div>
      <div className='flex text-primary'><FaFileDownload className='md:h-6 md:w-8'/></div>
      </div>

      <div className='flex items-center justify-between px-8 mt-4 '>
      <div className='flex '>
        <div className=' text-primary'><FaFilePdf className='md:w-12 md:h-8'/></div>
        <div>Dollar Card  Form</div>
      </div>
      <div className='flex text-primary'><FaFileDownload className='md:h-6 md:w-8'/></div>
      </div>


    </div>
  )
}

export default  Downloadsc
