import React from 'react'

const Onlineaccountopening = () => {
  return (
    <div className='mx-auto bg-white select-none max-w-screen-2xl'>
         <div className='flex flex-col w-full px-8 pt-20 md:flex-row md:px-24 md:pt-32'>

         <div className='w-full md:w-1/2 md:mr-8'>  <img
            src={require('../images/bank1.jpg')}
            alt='Online account service'
            className='object-fill w-full h-full'
          /></div>

         <div className='flex flex-col w-full md:w-1/2'>
         <div className='mt-2 text-2xl font-bold '>Online Account Opening</div>
         <div className='mt-2 font-sans'>
         We offer multiple online money transfer services, and our service is renowned as the most well-known, secure, and trustworthy option on the internet.
         </div>
         <button className='flex items-start justify-center w-24 mt-4 text-white bg-green-800 border rounded-md text-nowrap'>Get Started</button>
         </div>
         
         </div>

    </div>
  )
}

export default Onlineaccountopening
