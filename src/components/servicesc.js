import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ logo, heading, text }) => {
  return (
    <div className='w-64 p-2 m-6 border h-50'>
      <div className="flex items-center">
        <div className="mr-2">{logo}</div>
        <div className="font-bold">{heading}</div>
      </div>
      <div>{text}</div>
      <div className="flex mt-4 justify-content">
        <div>Learn More</div>
        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
      </div>
    </div>
  );
}
const Servicesc = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint based on your design requirements
        settings: {
          slidesToShow: 1, // Display only one card for small devices
        },
      },
    ],
  };

  return (
    <div className='mx-auto max-w-screen-2xl'>
      <div className='flex items-center justify-center mx-6 mt-6'>
        <div className='text-2xl font-medium'>Services</div>
      </div>
      <div className='relative'>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="absolute left-0 text-gray-500 transform -translate-y-1/2 cursor-pointer top-1/2"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="absolute right-0 text-gray-500 transform -translate-y-1/2 cursor-pointer top-1/2"
        />

        <Slider {...settings}>
          <Card
            logo={<img src={require('../images/365bankingservice.png')} alt="365bankingservice" className="w-8 h-8" />}
            heading="365 banking service"
            text="We provide anytime banking services to all the bank account holders"
          />
        <Card
          logo={<img src={require('../images/internet-banking2.png')} alt="Internetbankingservice" className="w-8 h-8" />}
          heading="Internet services"
          text="Have some internet services"
        />

        <Card
          logo={<img src={require('../images/mobile-banking.png')} alt="Mobilebankingservice" className="w-8 h-8" />}
          heading="Mobilebankingservice"
          text="You can have mobile banking features and all the service related to bank"
        />

        <Card
          logo={<img src={require('../images/sms-banking.png')} alt="Smsbankingservice" className="w-8 h-8" />}
          heading="Smsbankingservice"
          text=" sms banking related services to all the customer related with organization"
        />
        
        <Card
          logo={<img src={require('../images/atm services.png')} alt="Atmbankingservice" className="w-8 h-8" />}
          heading="Atmbankingservice"
          text=" Atm banking related services to all the customer related with organization"
        />
          
          <Card
          logo={<img src={require('../images/remittance.png')} alt="Remittanceservice" className="w-8 h-8" />}
          heading="Remittancebankingservice"
          text=" remittance related services to all the customer related with organization"
        />

         <Card
          logo={<img src={require('../images/appservices.png')} alt="Appservices" className="w-8 h-8" />}
          heading="Appservices"
          text=" app related services to all the customer related with organization"
        />

        <Card
          logo={<img src={require('../images/health-services.png')} alt="Health-services" className="w-8 h-8" />}
          heading="Health-services"
          text=" Health related services to all the customer related with organization"
        />

         <Card
          logo={<img src={require('../images/microfinance.png')} alt="Microfinanceservice" className="w-8 h-8" />}
          heading="MicroFinanceservice"
          text=" microfinance related services to all the customer related with organization"
        />

      <Card
          logo={<img src={require('../images/otherservices.png')} alt="Otherbankingservice" className="w-8 h-8" />}
          heading="Otherbankingservice"
          text=" other  banking related services to bank"
        />

         
        </Slider>
      </div>
    </div>
  );
}

export default Servicesc;
