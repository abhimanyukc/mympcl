import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const services = [
  {
    name: 'App Service',
    image: require('../../images/appservices.png'),
    content: 'App Service Content',
  },
  {
    name: 'Other Banking Service',
    image: require('../../images/otherservices.png'),
    content: 'Other Banking Service Content',
  },
  {
    name: '365 Banking Service',
    image: require('../../images/365bankingservice.png'),
    content: '365 Banking Service Content',
  },
  {
    name: 'Sms Banking Service',
    image: require('../../images/sms-banking.png'),
    content: 'Sms Banking Service Content',
  },
];

const MicrofinanceServicec = () => {
  return (
    <div className='mx-auto bg-white cursor-pointer select-none max-w-screen-2xl'>
      <div className='p-8 '>
        <div className='flex items-center mb-4 md:ml-4 '>
          <div>
            <img
              src={require('../../images/microfinance.png')}
              alt='Microfinance banking service'
              className='w-8 h-8 '
            />
          </div>
          <div className='font-semibold '>Microfinance Banking Service</div>
        </div>

        <div className='md:px-8 '>
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Microfinance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Microfinance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Microfinance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Microfinance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Microfinance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing banking Microfinance related services.
        </div>
        <div className='flex pt-16 mb-1 font-semibold text-black md:ml-6 text-nowrap'>Other Services</div>

        <div className='flex flex-col flex-wrap md:flex-row'>
          {services.map((service, index) => (
            <div className='my-4 md:pl-6' key={index}>
              <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md md:w-80 w-72 h-60'>
                <div>
                  <img src={service.image} alt={service.name} className='w-8 h-8 p-1 m-2' />
                </div>
                <div className='m-4 font-semibold text-nowrap'>{service.name}</div>
                <div className='mb-6 text-nowrap'>{service.content}</div>
                <div className='flex flex-row items-center text-green-500'>
                  <div className=' text-nowrap'>Learn More</div>
                  <div>
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicrofinanceServicec;
