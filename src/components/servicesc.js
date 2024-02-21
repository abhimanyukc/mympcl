// Slider.js
import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrevArrow = ({ onClick }) => (
  <FaChevronLeft
    onClick={onClick}
    className="absolute left-0 z-10 p-1 text-2xl text-orange-500 transform -translate-y-1/2 border border-orange-500 cursor-pointer md:left-12 top-1/2 hover:bg-orange-500"
  />
);

const NextArrow = ({ onClick }) => (
  <FaChevronRight
    onClick={onClick}
    className="absolute right-0 z-10 p-1 text-2xl text-orange-500 transform -translate-y-1/2 border border-orange-500 cursor-pointer top-1/2 md:right-12 hover:bg-orange-500"
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
    <div className='z-10 mx-auto font-sans bg-gray-100 select-none max-w-screen-2xl md:px-4 md:pt-2'>
      <div className=' py-11'>
           <div className='px-24 pt-2 font-sans text-2xl font-semibold tracking-normal '>Services</div>
      <Slider {...settings}>
      <div className='px-4 py-20 md:px-20 md:py-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-white'>
          <div>  <img
            src={require('../images/365bankingservice.png')}
            alt='365 banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold' >365 Banking Service</div>
          <div className=''> 365 Banking Service Content</div>
          <Link to="/services/bankingservices">
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


      <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-white'>
          <div>  <img
            src={require('../images/sms-banking.png')}
            alt='sms banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='m-4 font-semibold'>Sms Banking Service</div>
          <div className='mb-6'> Sms Banking Service Content</div>
          <Link to="/services/smsservices">
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>

        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-white'>
          <div>  <img
            src={require('../images/mobile-banking.png')}
            alt='Mobile banking service'
            className='w-8 h-8 p-1 m-2'
          />
          </div>
          <div className='font-semibold'>Mobile Banking Service</div>
          <div>Mobile Banking Service Content</div>
          <Link to="/services/mobilebankingservices">
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-white'>
          <div>  <img
            src={require('../images/internet-banking2.png')}
            alt='internet banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold'>internet Banking Service</div>
          <div> Internet Banking Service Content</div>
          <Link to="/services/internetservices">
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-white'>
          <div>  <img
            src={require('../images/remittance.png')}
            alt='remittance banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold'>Remittance Banking Service</div>
          <div> Remittance Banking Service Content</div>
          <Link to="/services/remmittanceservices">
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-white'>
          <div>  <img
            src={require('../images/health-services.png')}
            alt='Health service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold'>Health Service</div>
          <div>Health Service Content</div>
          <Link to="/services/healthservices">
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


        <div className='py-20 p-20px-4 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-white'>
          <div>  <img
            src={require('../images/microfinance.png')}
            alt='microfinance banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold '>microfinance Banking Service</div>
          <div> microfinance Banking Service Content</div>
          <Link to="/services/microfinanceservices">
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


       


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-white'>
          <div>  <img
            src={require('../images/appservices.png')}
            alt='App service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold '>App Service</div>
          <div>App Service Content</div>
          <Link to="/services/appservices">
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


        <div className='px-4 py-20 md:px-20'>
          <div className='flex flex-col items-center justify-center h-64 bg-white'>
          <div>  <img
            src={require('../images/otherservices.png')}
            alt='other banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold'>Other Banking Service</div>
          <div> Other Banking Service Content</div>
          <Link to="/services/otherbankingservices">
          <div className='flex flex-row items-center text-green-500'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>

      </Slider>
      </div>
    </div>
  );
};

export default Servicesc;
