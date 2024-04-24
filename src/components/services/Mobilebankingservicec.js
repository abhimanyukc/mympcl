import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const Mobilebankingservicec = () => {
  return (
    <div className='mx-auto bg-white cursor-pointer select-none max-w-screen-2xl'>
    <div className='p-8 '>

     <div className='flex items-center mb-2 md:justify-center'>
      <div className=''><img
        src={require('../../images/mobile-banking.png')}
        alt='365 banking service'
        className='w-8 h-8 '
      /></div>
      <div className='font-semibold '>Mobile Banking Service</div>
     </div>

     <div className='md:px-8 '>गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Mobile Banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Mobile Banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Mobile Banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Mobile Banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Mobile Banking related services.
         गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Mobile Banking related services.</div>
      <div className='flex justify-center pt-16 mb-1 font-semibold text-black text-nowrap'>Other Services</div>
   

      <div className='flex flex-col flex-wrap md:flex-row'>
      <div className='my-4 md:pl-16'>
      <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md h-52 md:h-64 '>
      <div>  <img
        src={require('../../images/internetbanking.png')}
        alt='Internet banking service'
        className='w-8 h-8 p-1 m-2'
      /></div>
      <div className='m-4 font-semibold text-nowrap'>Internet Banking Service</div>
      <div className='mb-6 text-nowrap'> Internet Banking Service Content</div>
      <div className='flex flex-row items-center text-green-500'>
        <div  className=' text-nowrap'>Learn More</div>
        <div><FaAngleRight/></div>
      </div>
      </div>
    </div>

    <div className='my-4 md:pl-16'>
      <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md h-52 md:h-64 '>
      <div>  <img
        src={require('../../images/remittance.png')}
        alt='remmitance service'
        className='w-8 h-8 p-1 m-2'
      /></div>
      <div className='m-4 font-semibold text-nowrap'>Remmitance Service</div>
      <div className='mb-6 text-nowrap'> Remmitance Service Content</div>
      <div className='flex flex-row items-center text-green-500'>
        <div  className=' text-nowrap'>Learn More</div>
        <div><FaAngleRight/></div>
      </div>
      </div>
    </div>


    <div className='my-4 md:pl-16'>
      <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md h-52 md:h-64 '>
      <div>  <img
        src={require('../../images/health-services.png')}
        alt='mobile banking service'
        className='w-8 h-8 p-1 m-2'
      /></div>
      <div className='m-4 font-semibold text-nowrap'>Health Service</div>
      <div className='mb-6 text-nowrap'> Health Service Content</div>
      <div className='flex flex-row items-center text-green-500'>
        <div  className=' text-nowrap'>Learn More</div>
        <div><FaAngleRight/></div>
      </div>
      </div>
    </div>


    <div className='my-4 md:pl-12'>
      <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md h-52 md:h-64 '>
      <div>  <img
        src={require('../../images/microfinance.png')}
        alt='microfinnance banking service'
        className='w-8 h-8 p-1 m-2'
      /></div>
      <div className='m-4 font-semibold text-nowrap'>Microfinance Banking Service</div>
      <div className='mb-6 text-nowrap'> Microfinance Banking Service Content</div>
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

export default Mobilebankingservicec
