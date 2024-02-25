import React from 'react' 
import { FaMoneyCheck } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faBank } from '@fortawesome/free-solid-svg-icons';
import {  FaAngleRight } from 'react-icons/fa';
const Account = () => {
  return (
    <div className='px-5 py-12 mx-auto font-sans bg-white select-none max-w-screen-2xl md:px-20 md:py-8'>
    <div className='flex flex-col p-2 md:px-4'>
      

      <div className='mb-2 text-2xl font-bold'>Account</div>
      <div className='font-serif '>Ganeshjal Multipurpose Cooperative offers a variety of deposit options to fulfill the growing demands of its members.
        We provide a competitive interest rate on each deposit product  and operate the following plan to encourage for the participation of communities members.</div>
        
        <div className='flex flex-col font-serif md:flex-row'>
       
       <div className='flex flex-col my-8 '>
        <div className='mb-4 text-lg font-semibold text-green-800'>Monthly Saving</div>
        <div className='flex flex-row items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div className=''>Monthly Saving starts from RS. 100</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div className=''>Interest calculation daily basis and interest post quarterly.</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>Entitle to the dividend offered by the institute base on the Share Kitta.</div></div>
       </div>

       <div className='flex flex-col my-8'>
        <div className='mb-4 font-serif text-lg font-semibold text-green-800'>Daily Saving(6 Months)</div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>You can save a desirable amount from home or the office.</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>Minimum Rs. 100-balance needs to maintain all the time.</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>Interest calculation daily and post quarterly.</div></div>
       </div>
       
       <div className='flex flex-col my-8'>
        <div className='mb-4 font-serif text-lg font-semibold text-green-800'>Nari Saving</div>
        <div className='flex items-start '><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>You can save a desirable amount from home or the office.</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>Daily collection through our trusty employees.</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>ATM transaction supports banks in Nepal and India.</div></div>
       </div>

       <div className='flex flex-col mt-8'>
        <div className='font-serif text-lg font-semibold text-green-800'>Senior citizenship saving</div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>Interest calculation daily basis and post quarterly</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>Free ABBS (Any branch banking service)</div></div>
        <div className='flex items-start'><div className='mr-2 text-white bg-indigo-800'><FaAngleRight/></div><div>Monthly collection from home</div></div>
       </div>
        </div>
        </div>

        <div className='flex flex-col '>

        <div className='flex w-20 mx-auto mb-12 text-center text-white bg-primary'>View More</div>

        <div className='flex flex-col flex-wrap justify-center w-11/12 py-2 mx-auto text-white rounded-md md:w-full bg-primary md:m-4 md:flex-row'>
          <div className='flex mx-8 mt-8 md:mt-4'>
        <img
            src={require('../images/Capital.jpg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col ml-2'>
          <div>70,087,500</div>
          <div>Capital</div>
          </div>
          </div>

          <div className='flex mx-8 mt-4'>
        <img
            src={require('../images/asst.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col ml-2'>
          <div>514,169,286</div>
          <div>Assets</div>
          </div>
          </div>

          
          <div className='flex mx-8 mt-4'>
        <img
            src={require('../images/deposit.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col ml-2'>
          <div>275,015,063</div>
          <div>Deposit</div>
          </div>
          </div>

         
          <div className='flex mx-8 mt-4'>
        <img
            src={require('../images/members.jpg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col object-fill ml-2'>
          <div>9967</div>
          <div>Members</div>
          </div>
          </div>

         
          <div className='flex mx-8 mt-4'>
        <img
            src={require('../images/reserve.jpeg')}
            alt='Sahakarilogo'
            className='object-fill w-8 h-12 mr-2'
          />
          <div className='flex flex-col ml-2'>
          <div>986,073,515</div>
          <div>Reserve Fund</div>
          </div>
          </div>

          
         

        </div>
    </div>
    </div>
  )
}

export default Account
