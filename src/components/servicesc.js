// Slider.js
import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';
const PrevArrow = ({ onClick }) => (
  <FaChevronLeft
    onClick={onClick}
    className="absolute left-0 z-10 invisible p-1 text-2xl text-indigo-800 transform -translate-y-1/2 border border-indigo-800 cursor-pointer md:left-20 md:visible top-1/2 hover:bg-indigo-800 hover:text-white"
  />
);

const NextArrow = ({ onClick }) => (
  <FaChevronRight
    onClick={onClick}
    className="absolute right-0 z-10 invisible p-1 text-2xl text-indigo-800 transform -translate-y-1/2 border border-indigo-800 cursor-pointer md:visible top-1/2 md:right-20 hover:bg-indigo-800 hover:text-white"
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
    <div className='z-10 mx-auto font-sans bg-white select-none max-w-screen-2xl md:px-4 md:pt-2'>
      <div className=''>
           <div className='px-24 pt-2 mb-4 font-sans text-2xl font-semibold tracking-normal text-center md:pt-20'> Services</div>
      <Slider {...settings}>
      <div className='flex flex-col items-center justify-center py-0 md:py-12'>
          <div className='flex flex-col items-center justify-center w-full px-8 bg-white h-120 md:h-60 md:px-40'>
          <div>  <img
            src={require('../images/365bankingservice.png')}
            alt='365 banking service'
            className='w-8 h-8 p-1 m-1'
          /></div>
          <div className='font-semibold' >365 Banking Service</div>
          <div className=''> The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <Link to="/services/bankingservices">
          <div className='flex flex-row items-center text-green-800'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col items-center justify-center w-full px-10 py-2 bg-white h-120 md:h-60 md:px-40 md:py-20'>
          <div>  <img
            src={require('../images/sms-banking.png')}
            alt='sms banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold' >Sms Banking Service</div>
          <div className=''> The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <Link to="/services/smsservices">
          <div className='flex flex-row items-center text-green-800'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col items-center justify-center w-full px-10 py-2 bg-white h-120 md:h-60 md:px-40 md:py-20'>
          <div>  <img
            src={require('../images/mobile-banking.png')}
            alt='mobile banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold' >Mobile Banking Service</div>
          <div className=''> The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <Link to="/services/mobilebankingservices">
          <div className='flex flex-row items-center text-green-800'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>



        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col items-center justify-center w-full px-10 py-2 bg-white h-120 md:h-60 md:px-40 md:py-20'>
          <div>  <img
            src={require('../images/internet-banking2.png')}
            alt='internet banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold' >Internet Banking Service</div>
          <div className=''> The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <Link to="/services/internetservices">
          <div className='flex flex-row items-center text-green-800'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>



        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col items-center justify-center w-full px-10 py-2 bg-white h-120 md:h-60 md:px-40 md:py-20'>
          <div>  <img
            src={require('../images/remittance.png')}
            alt='Remittance banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold' >Remittance Service</div>
          <div className=''> The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <Link to="/services/remmittanceservices">
          <div className='flex flex-row items-center text-green-800'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>



        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col items-center justify-center w-full px-10 py-2 bg-white h-120 md:h-60 md:px-40 md:py-20'>
          <div>  <img
            src={require('../images/health-services.png')}
            alt='Health service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold' > Health Service</div>
          <div className=''> The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <Link to="/services/healthservices">
          <div className='flex flex-row items-center text-green-800'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col items-center justify-center w-full px-10 py-2 bg-white h-120 md:h-60 md:px-40 md:py-20'>
          <div>  <img
            src={require('../images/microfinance.png')}
            alt='microfinance service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold' >microfinance Banking Service</div>
          <div className=''> The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <Link to="/services/microfinanceservices">
          <div className='flex flex-row items-center text-green-800'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>


       


        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col items-center justify-center w-full px-10 py-2 bg-white h-120 md:h-60 md:px-40 md:py-20'>
          <div>  <img
            src={require('../images/appservices.png')}
            alt='App service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold' >App Service</div>
          <div className=''> The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <Link to="/services/appservices">
          <div className='flex flex-row items-center text-green-800'>
            <div>Learn More</div>
            <div><FaAngleRight/></div>
          </div>
          </Link>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col items-center justify-center w-full px-10 py-2 bg-white h-120 md:h-60 md:px-40 md:py-20'>
          <div>  <img
            src={require('../images/otherservices.png')}
            alt='other banking service'
            className='w-8 h-8 p-1 m-2'
          /></div>
          <div className='font-semibold' >other Banking Service</div>
          <div className=''> The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,
           Other Service Center will be closed at public holiday</div>
          <Link to="/services/otherbankingservices">
          <div className='flex flex-row items-center text-green-800'>
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
