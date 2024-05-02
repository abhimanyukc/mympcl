import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const services = [
  {
    name: 'Health Service',
    image: require('../../images/health-services.png'),
    content: 'Health Service Content',
  },
  {
    name: 'Microfinance Service',
    image: require('../../images/microfinance.png'),
    content: 'Microfinance Service Content',
  },
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
];

const RemittanceServicec = () => {
  return (
    <div className='mx-auto bg-white cursor-pointer select-none max-w-screen-2xl'>
      <div className='p-8 '>
        <div className='flex items-center mb-4 md:ml-4 '>
          <div>
            <img
              src={require('../../images/remittance.png')}
              alt='Remittance service'
              className='w-8 h-8 '
            />
          </div>
          <div className='font-semibold '>Remittance Service</div>
        </div>

        <div className='md:px-8 '>
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing remittance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing remittance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing remittance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing remittance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing remittance related services.
          गाउसहर बहुउदेस्यिय सहकारि सस्था has been providing remittance related services.
        </div>
        <div className='flex pt-16 mb-1 font-semibold text-black md:ml-6 text-nowrap'>Other Services</div>

        <div className='flex flex-col flex-wrap md:flex-row'>
          {services.map((service, index) => (
            <div className='my-4 md:pl-6 md:w-80 w-72 h-60' key={index}>
              <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-md h-52 md:h-64 '>
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

export default RemittanceServicec;
