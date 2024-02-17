// Slider.js
import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleRight } from 'react-icons/fa';

const PrevArrow = ({ onClick }) => (
  <FaChevronLeft
    onClick={onClick}
    className="absolute left-0 text-2xl text-gray-500 transform -translate-y-1/2 cursor-pointer md:left-12 top-1/2"
  />
);

const NextArrow = ({ onClick }) => (
  <FaChevronRight
    onClick={onClick}
    className="absolute right-0 text-2xl text-gray-500 transform -translate-y-1/2 cursor-pointer top-1/2 md:right-12"
  />
);



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0',
      },
    },
  ],
};

const Servicesc = () => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <Slider {...settings}>
      <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/365bankingservice.png')}
            alt='365 banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>365 Banking Service</div>
          <div> 365 Banking Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>


      <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/sms-banking.png')}
            alt='sms banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='m-4 '>Sms Banking Service</div>
          <div className='mb-6'> Sms Banking Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>

        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/mobile-banking.png')}
            alt='Mobile banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>Mobile Banking Service</div>
          <div>Mobile Banking Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/internet-banking2.png')}
            alt='internet banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>internet Banking Service</div>
          <div> Internet Banking Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/remittance.png')}
            alt='remittance banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>Remittance Banking Service</div>
          <div> Remittance Banking Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/health-services.png')}
            alt='Health service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>Health Service</div>
          <div>Health Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>


        <div className='py-20 p-20px-4 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/microfinance.png')}
            alt='microfinance banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>microfinance Banking Service</div>
          <div> microfinance Banking Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/365bankingservice.png')}
            alt='365 banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>Atm Banking Service</div>
          <div> Atm Banking Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/appservices.png')}
            alt='App service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>App Service</div>
          <div>App Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-green-600'>
          <div>  <img
            src={require('../images/otherservices.png')}
            alt='other banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div>Other Banking Service</div>
          <div> Other Banking Service Content</div>
          <div className='flex flex-row items-center'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Servicesc;
