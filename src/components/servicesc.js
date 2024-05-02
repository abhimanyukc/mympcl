// Slider.js
import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';


const PrevArrow = ({ onClick}) => (
  <FaChevronLeft
    onClick={onClick}
    className="absolute left-0 invisible p-1 text-2xl text-indigo-800 transform -translate-y-1/2 border border-indigo-800 cursor-pointer z-5 md:left-20 top-1/2 hover:bg-indigo-800 hover:text-white"
  />
);

const NextArrow = ({ onClick}) => (
  <FaChevronRight
    onClick={onClick}
    className="absolute right-0 invisible p-1 text-2xl text-indigo-800 transform -translate-y-1/2 border border-indigo-800 cursor-pointer z-5 top-1/2 md:right-20 hover:bg-indigo-800 hover:text-white"
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

console.log('hello world');



const Servicesc = () => {

   const [t, i18n] = useTranslation("global");
   const slidesData = [
    {
      image: require('../images/365bankingservice.png'),
      title: t("services1.message"),
      description: t("services11.message"),
      link: "/services/bankingservices"
    },
    {
      image: require('../images/sms-banking.png'),
      title: t("services2.message"),
      description: "The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday",
      link: "/services/smsservices"
    },
    {
      image: require('../images/mobile-banking.png'),
      title: t("services3.message"),
      description: " The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,Other Service Center will be closed at public holiday",
      link: "/services/mobilebankingservices"
    },
    {
      image: require('../images/internet-banking2.png'),
      title: t("services4.message"),
      description: "The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center,  Other Service Center will be closed at public holiday",
      link: "/services/internetservices"
    },
    {
      image: require('../images/remittance.png'),
      title: t("services5.message"),
      description: "The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday",
      link: "/services/remmittanceservices"
    },
    {
      image: require('../images/health-services.png'),
      title: t("services6.message"),
      description: "The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday",
      link: "/services/healthservices"
    },
    {
      image: require('../images/microfinance.png'),
      title: t("services7.message"),
      description: "The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday",
      link: "/services/microfinanceservices"
    },
    {
      image: require('../images/appservices.png'),
      title: t("services8.message"),
      description: "The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday",
      link: "/services/appservices"
    },
    {
      image: require('../images/otherservices.png'),
      title: t("services9.message"),
      description: "The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday.The GANESHJAL has been providing 365 days banking facilities. In public holiday the GANESHJAL  will be open from 10 am to 1:00pm but now these facilities also available only in Head Office, Khajura Service Center, Other Service Center will be closed at public holiday",
      link: "/services/otherbankingservices"
    },
     
  ];
  
  return (


    


    <div className='mx-auto font-sans bg-white select-none z-5 pt-44 max-w-screen-2xl md:px-8 md:pt-10'>
      <div className=''>
           <div className='px-24 font-sans text-2xl font-semibold tracking-normal text-center md:pb-2 '> {t("services.message")}</div>
           <Slider {...settings}>
  {slidesData.map((slide, index) => (
    <div key={index} className='flex flex-col items-center justify-center py-0 mb-8 md:py-12 md:mb-0'>
      <div className='flex flex-col items-center justify-center w-full px-8 bg-white h-120 md:h-60 md:px-40'>
        <div>
          <img
            src={slide.image}
            alt={slide.title}
            className='object-cover w-8 h-8 p-1 m-2'
          />
        </div>
        <div className='font-semibold'>{slide.title}</div>
        <div className=''>{slide.description}</div>
        <Link to={slide.link}>
          <div className='flex flex-row items-center text-green-800'>
            <div>{t("services10.message")}</div>
            <div><FaAngleRight/></div>
          </div>
        </Link>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </div>
  );
};

export default Servicesc;
