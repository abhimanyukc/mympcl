import React from 'react'
import { FaFilePdf,FaFileDownload } from 'react-icons/fa'
const  Downloadsc= () => {
  return (
    <div className='p-4 mx-auto max-w-screen-2xl'>
       <div className='flex items-center justify-between px-8 mt-4 '>
      <div className='flex '>
        <div className=' text-primary'><FaFilePdf className='md:w-12 md:h-8 '/></div>
        <div className='ml-2 '>Atm Registration Form</div>
      </div>
      <div className='flex text-primary'><FaFileDownload className='md:h-6 md:w-8'/></div>
      </div>

      <div className='flex items-center justify-between px-8 mt-4 '>
      <div className='flex '>
        <div className=' text-primary'><FaFilePdf className=' md:w-12 md:h-8'/></div>
        <div className='ml-2 '>Online Account Opening Form</div>
      </div>
      <div className='flex text-primary'><FaFileDownload className='md:h-6 md:w-8'/></div>
      </div>

      <div className='flex items-center justify-between px-8 mt-4 '>
      <div className='flex '>
        <div className=' text-primary'><FaFilePdf className='md:w-12 md:h-8'/></div>
        <div className='ml-2 '>Demat Account Opening Form</div>
      </div>
      <div className='flex text-primary'><FaFileDownload className='md:h-6 md:w-8'/></div>
      </div>

      <div className='flex items-center justify-between px-8 mt-4 '>
      <div className='flex '>
        <div className=' text-primary'><FaFilePdf className='md:w-12 md:h-8'/></div>
        <div className='ml-2 '>Dollar Card  Form</div>
      </div>
      <div className='flex text-primary'><FaFileDownload className='md:h-6 md:w-8'/></div>
      </div>


    </div>
  )
}

export default  Downloadsc
