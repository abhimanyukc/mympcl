import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const Remittance = () => {
  return (
       <div className='mx-auto font-serif bg-white select-none max-w-screen-2xl md:px-24 md:py-2'>
        <div className='mx-4 my-8'>
        
        <div className='flex flex-col md:flex-row md:items-center md:p-8'>
        <div className='md:mt-4'>
        <div className='text-xl font-semibold' >Remittance</div>
        <div className='font-semibold text-green-600 '>View More</div>
        </div>
        <div className='mt-4 md:ml-24'>We provide various services for online money transfers. Our service is the best known,
       most secure and reliable online service. You can send or receive money within minute to from other people around ...</div>
       </div>

       <div className='flex flex-col flex-wrap mt-4 md:flex-row md:py-8 md:mt-0 md:justify-center'>
        <div className='mt-1'><img
            src={require('../images/fedex.png')}
            alt='fedexlogo'
            className='w-40 h-20 md:h-40'
          /></div>
        <div className='mt-1 ml-6 md:ml-16'><img
            src={require('../images/fonepay.png')}
            alt='fonepaylogo'
            className='h-20 mr-2 w-half md:w-full md:h-40'
          /></div>
        <div className='mt-2 ml-8 md:mt-1 md:ml-16'><img
            src={require('../images/esewa.jpg')}
            alt='esewalogo'
            className='h-20 mr-2 w-half md:w-full md:h-44'
          /></div>
        <div className='ml-4 md:ml-16'><img
            src={require('../images/imepay.png')}
            alt='imepaylogo'
            className='h-20 mr-2 w-half md:w-full md:h-36'
          /></div>
       </div>
        </div>
       </div>
  )
}

export default Remittance
