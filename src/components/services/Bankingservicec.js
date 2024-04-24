import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const Bankingservices = () => {
  return (
    <div className='mx-auto bg-white cursor-pointer select-none max-w-screen-2xl'>
        <div className='p-8 '>

         <div className='flex items-center mb-2 md:justify-center'>
          <div className=''><img
            src={require('../../images/365bankingservice.png')}
            alt='365 banking service'
            className='w-8 h-8 '
          /></div>
          <div className='font-semibold '>365 Banking Service</div>
         </div>

         <div className='md:px-8 '>गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking banking related services.</div>
          <div className='flex justify-center pt-16 mb-1 font-semibold text-black text-nowrap'>Other Services</div>
       

          <div className='flex flex-col flex-wrap md:flex-row'>
          <div className='my-4 md:pl-16'>
          <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md h-52 md:h-64 '>
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

        <div className='my-4 md:pl-16'>
          <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md h-52 md:h-64 '>
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
    

        <div className='my-4 md:pl-16'>
          <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md h-52 md:h-64 '>
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


        <div className='my-4 md:pl-12'>
          <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md h-52 md:h-64 '>
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
