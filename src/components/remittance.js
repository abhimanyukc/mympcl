import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const Remittance = () => {
  return (
       <div className='mx-auto bg-white select-none max-w-screen-2xl'>
        <div className='mt-8 md:mt-16'>
        
        <div className='flex flex-col px-8 md:px-24 md:flex-row md:items-center '>
        <div className='md:mt-4'>
        <div className='text-xl font-semibold' >Remittance</div>
        <div className='p-1 mt-1 font-semibold text-green-600 '>View More</div>
        </div>
        <div className='mt-2 md:ml-24'>We provide various services for online money transfers. Our service is the best known,
       most secure and reliable online service. You can send or receive money within minute to from other people around ...</div>
       </div>

        <div className='flex flex-col flex-wrap mt-4 md:mt-0 md:flex-row md:px-16'>
        <div className='md:mt-4'><img
            src={require('../images/fedex.png')}
            alt='fedexlogo'
            className='object-fill w-40 h-20'
          /></div>
        <div className='px-4 '><img
            src={require('../images/fonepay.png')}
            alt='fonepaylogo'
            className='object-fill w-32 h-28'
          /></div>
        <div className='px-7 md:mt-5'><img
            src={require('../images/esewa.jpg')}
            alt='esewalogo'
            className='object-fill h-20 w-28'
          /></div>
        <div className='px-2 md:mt-3'><img
            src={require('../images/imepay.png')}
            alt='imepaylogo'
            className='object-fill h-20 w-36'
          /></div>
       </div> 
     
        </div>
       </div>
  )
}

export default Remittance
