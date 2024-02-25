import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const Bankingservices = () => {
  return (
    <div className='mx-auto bg-white cursor-pointer select-none max-w-screen-2xl'>
        <div className='p-8 '>

         <div className='flex items-center md:justify-center'>
          <div className=''><img
            src={require('../../images/365bankingservice.png')}
            alt='365 banking service'
            className='w-8 h-8 '
          /></div>
          <div>365 Banking Service</div>
         </div>

         <div className='md:px-16 '>The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <div className='flex justify-center pt-32 text-black text-bold text-nowrap'>Other Services</div>
       

          <div className='flex flex-col items-center justify-center md:flex-row '>
          <div className=' md:py-10 md:px-20'>
          <div className='flex flex-col items-center justify-center px-10 bg-white border rounded-md md:px-20 h-52 md:h-64 md:py-40'>
          <div>  <img
            src={require('../../images/sms-banking.png')}
            alt='sms banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='m-4 font-semibold text-nowrap'>Sms Banking Service</div>
          <div className='mb-6 text-nowrap'> Sms Banking Service Content</div>
          <div className='flex flex-row items-center text-green-500'>
            <div  className=' text-nowrap'>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>

        <div className=' md:py-10 md:px-20'>
          <div className='flex flex-col items-center justify-center px-10 bg-white border rounded-md md:px-20 h-52 md:h-64 md:py-40'>
          <div>  <img
            src={require('../../images/mobile-banking.png')}
            alt='mobile banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='m-4 font-semibold text-nowrap'>Mobile Banking Service</div>
          <div className='mb-6 text-nowrap'> Mobile Banking Service Content</div>
          <div className='flex flex-row items-center text-green-500'>
            <div  className=' text-nowrap'>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>
        </div>
 

        </div>
    </div>
  )
}

export default Bankingservices
