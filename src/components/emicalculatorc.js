import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

const Emicalculatorc = () => {
  return (
    <div className='mx-auto bg-white bg-green-800 select-none max-w-screen-2xl '>
      <div className='flex flex-col justify-center md:space-x-8 md:flex-row md:px-24 md:py-2'>
        <div className='flex flex-col items-center px-8 md:px-0 md:items-start'>
          <div className='mt-8 mb-4 text-black'> Get Started With Emi Calculator</div>
          <div className="flex flex-col items-center justify-center w-full p-5 bg-green-800 border md:flex-row md:flex-wrap ">
            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
              <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>Agriculture Loan</div>
            </div>
            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>Business Loan </div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'> Emergency Loan</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>Educational Loan</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half '>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-center text-white'>Foreign Employment Loan</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-center text-white'>Hire Purchase Loan</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center my-8 md:items-center'>
          <div className='mb-2 text-center text-black'>View All Loans</div>
          <div className="flex items-center p-6 mx-auto bg-green-800 w-half md:h-full md:mt-4 md:px-20">
            <div className='flex flex-col md:flex-col'>
              <div className='text-white ' >Loan Type</div>
              <select className=''>
                <option className=''>Select Loan Type</option>
                <option>Agriculture Loan</option>
                <option>Business Loan</option>
                  <option>Emergency Loan</option>
                  <option>Educational Loan</option>
                  <option className=''>Foreign Employment Loan</option>
                  <option className=''>Hire Purchase Loan</option>
              </select>

              <div  className='text-white '>Loan Amount (NPR)</div>
              <input type="text" className='p-1 border' />

              <div className='text-white '>Interest Rate (%)</div>
              <input type="text" className='p-1 border' />

              <div className='text-white '>Duration (in month)</div>
              <input type="text" className='p-1 border' />

              <div className='text-white '>Monthly Payment (EMI)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emicalculatorc;