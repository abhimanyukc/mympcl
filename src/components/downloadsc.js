import React from 'react';
import { FaFilePdf, FaFileDownload } from 'react-icons/fa';
import ATMRegistrationForm from '../pdfs/atm_registration_form.pdf';
import OnlineAccountOpeningForm from '../pdfs/online_account_opening_form.pdf';
import DematAccountOpeningForm from '../pdfs/demat_account_opening_form.pdf';
import DollarCardForm from '../pdfs/dollar_card_form.pdf';

const Downloadsc = () => {
  // Array of form data
  const formData = [
    { name: 'Atm Registration Form', link: ATMRegistrationForm },
    { name: 'Online Account Opening Form', link: OnlineAccountOpeningForm },
    { name: 'Demat Account Opening Form', link: DematAccountOpeningForm },
    { name: 'Dollar Card Form', link: DollarCardForm }
  ];

  return (
    <div className='p-4 mx-auto max-w-screen-2xl'>
      {formData.map((form, index) => (
        <div key={index} className='flex items-center justify-between px-8 mt-4'>
          <div className='flex'>
            <div className='text-primary'>
              <FaFilePdf className='md:w-12 md:h-8' />
            </div>
            <div className='ml-2'>{form.name}</div>
          </div>
          <div className='flex text-primary'>
            <a href={form.link} download>
              <FaFileDownload className='md:h-6 md:w-8' />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Downloadsc;
