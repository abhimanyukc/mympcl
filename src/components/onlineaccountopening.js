import React from 'react'

const Onlineaccountopening = () => {
  return (
    <div className='px-5 mx-auto bg-white select-none md:px-3 max-w-screen-2xl md:py-2'>
         <div className='flex flex-col ml-1 mr-5 md:flex-row md:m-20'>

         <div>  <img
            src={require('../images/onlineacccount.jpeg')}
            alt='Online account service'
            className='w-full h-full p-1 m-2 rounded-xl md:mt-3 md:mx-0'
          /></div>

         <div className='flex flex-col justify-center mt-4 ml-2 md:mt-0 md:ml-8 '>
         <div className='mt-2 text-2xl font-bold '>Online Account Opening</div>
         <div className='mt-2 font-sans'>
         We offer multiple online money transfer services, and our service is renowned as the most well-known, secure, and trustworthy option on the internet.
         </div>
         <button className='flex items-start justify-center p-1 mt-4 text-white bg-green-800 border rounded-md md:p-2 w-28'>Get Started</button>
         </div>
         
         </div>

    </div>
  )
}

export default Onlineaccountopening
