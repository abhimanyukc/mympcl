import React from 'react'

const Onlineaccountopening = () => {
  return (
    <div className='mx-auto bg-white select-none max-w-screen-2xl'>
         <div className='flex flex-col flex-wrap px-5 ml-1 mr-5 md:flex-row md:m-20 md:w-full md:px-3 md:py-2'>

         <div>  <img
            src={require('../images/onlineacccount.jpeg')}
            alt='Online account service'
            className='object-fill w-full p-1 m-2 md:h-full h-1/2 rounded-xl md:mt-3 md:mx-0'
          /></div>

         <div className='flex flex-col justify-center mt-4 ml-2 md:mt-0 md:ml-8 md:w-1/2'>
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
