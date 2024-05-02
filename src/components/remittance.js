import React from 'react';
import { useTranslation } from 'react-i18next';
import fedexLogo from '../images/fedex.png';
import fonepayLogo from '../images/fonepay.png';
import esewaLogo from '../images/esewa.jpg';
import imepayLogo from '../images/imepay.png';

const Remittancec = () => {
  const { t } = useTranslation("global");

  const remittanceCompanies = [
    { name: 'FedEx', image: fedexLogo, alt: 'fedexlogo' },
    { name: 'Fonepay', image: fonepayLogo, alt: 'fonepaylogo' },
    { name: 'eSewa', image: esewaLogo, alt: 'esewalogo' },
    { name: 'IME Pay', image: imepayLogo, alt: 'imepaylogo' }
  ];

  return (
    <div className='mx-auto bg-white select-none max-w-screen-2xl'>
      <div className='mt-4'>
        <div className='flex flex-col px-8 md:flex-row md:items-center '>
          <div className='md:mt-4'>
            <div className='text-2xl font-semibold'>{t("rem.message")}</div>
            <div className='p-1 mt-1 font-semibold text-green-600 text-nowrap'>{t("rem1.message")}</div>
          </div>
          <div className='mt-2 md:ml-24'>{t("rem2.message")}</div>
        </div>

        <div className='flex flex-col flex-wrap w-full mt-2 md:mt-0 md:flex-row md:px-1'>
          {remittanceCompanies.map((company, index) => (
            <div key={index} className='px-4 md:mt-1 md:w-1/4'>
              <img
                src={company.image}
                alt={company.alt}
                className='object-fill w-32 h-28 md:h-20'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Remittancec;
