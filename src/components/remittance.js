import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const Remittance = () => {
  return (
       <div className='px-4 mx-auto font-sans font-serif bg-white select-none max-w-screen-2xl md:px-24 md:py-2'>
        <div className='mx-4 my-8'>
        
        <div className='flex flex-col md:flex-row md:items-center md:p-8'>
        <div className='md:mt-4'>
        <div className='text-xl font-semibold' >Remittance</div>
        <div className='mt-1 font-semibold text-green-600'>View More</div>
        </div>
        <div className='mt-2 md:ml-24'>We provide various services for online money transfers. Our service is the best known,
       most secure and reliable online service. You can send or receive money within minute to from other people around ...</div>
       </div>

        <div className='flex flex-col flex-wrap items-center justify-center p-8 mt-4 md:flex-row md:py-8 md:mt-0 md:justify-center'>
        <div className='md:py-4'><img
            src={require('../images/fedex.png')}
            alt='fedexlogo'
            className='object-fill h-20 w-72 md:w-40 md:h-40'
          /></div>
        <div className='ml-2 md:py-4 md:ml-16'><img
            src={require('../images/fonepay.png')}
            alt='fonepaylogo'
            className='object-fill mr-2 h-28 w-36 md:w:-44 md:h-40'
          /></div>
        <div className='ml-1 md:py-4 md:ml-16'><img
            src={require('../images/esewa.jpg')}
            alt='esewalogo'
            className='object-fill h-20 mr-2 w-28 md:w-32 md:h-32 md:mt-2'
          /></div>
        <div className='ml-1 md:py-4 md:ml-16'><img
            src={require('../images/imepay.png')}
            alt='imepaylogo'
            className='object-fill h-24 mr-2 md:w-40 w-36 md:h-40 md:mb-4'
          /></div>
       </div> 
     
        </div>
       </div>
  )
}

export default Remittance
