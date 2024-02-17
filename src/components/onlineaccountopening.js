import React from 'react'

const Onlineaccountopening = () => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
         <div className='flex flex-col my-32 ml-1 mr-5 md:flex-row md:m-20'>

         <div>  <img
            src={require('../images/onlineacccount.jpeg')}
            alt='Online account service'
            className='w-full p-1 m-2 md:mt-3 md:mx-0 h-half'
          /></div>

         <div className='flex flex-col justify-center mt-4 ml-2 md:mt-0 md:ml-8'>
         <div className='mt-2 text-lg font-medium'>Online Account Opening</div>
         <div className='mt-2 font-sans'>
         We offer multiple online money transfer services, and our service is renowned as the most well-known, secure, and trustworthy option on the internet.
         </div>
         <button className='flex items-start justify-center p-2 mt-4 text-white bg-green-600 border rounded-md w-28'>Get Started</button>
         </div>
         
         </div>

    </div>
  )
}

export default Onlineaccountopening
