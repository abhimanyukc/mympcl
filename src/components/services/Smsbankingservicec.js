import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const Smsbankingservicec = () => {
  return (
    <div className='mx-auto bg-white cursor-pointer select-none max-w-screen-2xl'>
        <div className='p-8'>

         <div className='flex items-center justify-center '>
          <div><img
            src={require('../../images/365bankingservice.png')}
            alt='365 banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>SMS Banking Service</div>
         </div>

         <div>The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.</div>
          <div>Other Services</div>


          <div className='flex flex-col items-center justify-center md:flex-row '>
          <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col justify-center h-64 px-20 py-40 bg-white border rounded-md'>
          <div>  <img
            src={require('../../images/sms-banking.png')}
            alt='sms banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='m-4 font-semibold'>Sms Banking Service</div>
          <div className='mb-6'> Sms Banking Service Content</div>
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>

        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col justify-center h-64 px-20 py-40 bg-white border rounded-md'>
          <div>  <img
            src={require('../../images/mobile-banking.png')}
            alt='Mobile banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold'>Mobile Banking Service</div>
          <div>Mobile Banking Service Content</div>
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>
        </div>
 

        </div>
    </div>
  )
}

export default Smsbankingservicec
