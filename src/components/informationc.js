import React from 'react';
import { useTranslation } from 'react-i18next';


const Informationc = () => {
  const [t, i18n] = useTranslation('global')
const services = [
  { id: 1, message: t('services1.message') ,link: '/service1'},
  { id: 2, message: t('services2.message') ,link: '/service2'},
  { id: 3, message: t('services3.message') ,link: '/service3'},
  { id: 4, message: t('services4.message') ,link: '/service4'},
  { id: 5, message: t('services5.message') ,link: '/service5'},
  { id: 6, message: t('services6.message') ,link: '/service6'}
];

const cooperativeContent = {
  content: "The GauSahar Multipurpose Cooperative was established in Bs. 02/07/2064. It was registered in District Cooperative Office in Pokhara by 4 people in Srijana chowk. The cooperative had been working in the agricultural sector since it was founded but the services diversified from 2073 when the functional committee was changed and headed by present Chairperson Mr. Prem Kumar BC.",
  image: require('../images/slider10.png')
};

  
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <div className='flex flex-col px-8 mt-4 md:mt-10 md:flex-row'>
        <div className='flex flex-col w-full pb-4 md:w-3/4 md:mr-8 md:h-1/2'>
          <div className='mb-4 font-bold'>{t("info.message")}</div>
          <div>{t("info1.message")}</div>
          <div className=''>
            <img
              src={cooperativeContent.image}
              alt='GauSahar Multipurpose cooperative'
              className='object-fill w-full p-1 my-2 md:m-2 h-1/2 md:h-1/2 rounded-xl md:mt-3 md:mx-0'
            />
          </div>
          <div className='md:mt-4 '>
            {t("info2.message")}
          </div> 
          <div className='pt-4 font-bold'>{t("info3.message")}</div>
          <div>{t("info4.message")}</div>
          <div className='pt-4 font-bold'>{t("info5.message")}</div>
          <div>{t("info6.message")}</div>
        </div>
        <div className='flex flex-col mb-8 md:w-1/4'>
             {services.map(service => (
              <div key={service.id} className='p-1 border-b-2 md:py-7 text-nowrap'>
                <a href={service.link}><p>{service.message}</p></a>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Informationc;
