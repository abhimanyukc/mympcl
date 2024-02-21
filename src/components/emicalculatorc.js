import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

const Emicalculatorc = () => {
  return (
    <div className='mx-auto bg-green-600 select-none max-w-screen-2xl md:px-24 md:py-2'>
      <div className='flex flex-col justify-center space-x-8 md:flex-row'>
        <div className='flex flex-col items-center md:items-start'>
          <div className='mt-8 mb-4 text-white'> Get Started With Emi Calculator</div>
          <div className="flex flex-col p-5 bg-green-800 border md:flex-row md:flex-wrap ">
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

        <div className='flex flex-col items-center my-8 '>
          <div className='text-white'>View All Loans</div>
          <div className="flex items-center h-full bg-green-800 md:mt-4 md:px-20">
            <div className='flex flex-col md:flex-col'>
              <div >Loan Type</div>
              <select>
                <option>Select Loan Type</option>
                <option>Agriculture Loan</option>
                <option>Business Loan</option>
                  <option>Emergency Loan</option>
                  <option>Educational Loan</option>
                  <option>Foreign Employment Loan</option>
                  <option>Hire Purchase Loan</option>
              </select>

              <div>Loan Amount (NPR)</div>
              <input type="text" className='p-1 border' />

              <div>Interest Rate (%)</div>
              <input type="text" className='p-1 border' />

              <div>Duration (in month)</div>
              <input type="text" className='p-1 border' />

              <div>Monthly Payment (EMI)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emicalculatorc;
