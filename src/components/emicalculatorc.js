import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillPersonFill } from 'react-icons/bs'; 
const Emicalculatorc = () => {
  const [loanType, setLoanType] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [monthlyEMI, setMonthlyEMI] = useState('');

  const handleLoanTypeChange = (e) => {
    const selectedLoanType = e.target.value;
    setLoanType(selectedLoanType);

    // Set interest rate and duration based on the selected loan type
    switch (selectedLoanType) {
      case 'Agriculture Loan':
        setInterestRate('15.00');
        setDuration('12');
        break;
      case 'Business Loan':
        setInterestRate('16.00');
        setDuration('12');
        break;
      case 'Emergency Loan':
        setInterestRate('13.00');
        setDuration('12');
        break;
      case 'Educational Loan':
        setInterestRate('15.00');
        setDuration('12');
        break;
      case 'Foreign Employment Loan':
        setInterestRate('16.00');
        setDuration('12');
        break;
      case 'Hire Purchase Loan':
        setInterestRate('16.00');
        setDuration('12');
        break;
      default:
        setInterestRate('');
        setDuration('');
    }
  };

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount) || 0;
    const timeInMonths = parseFloat(duration) || 0;
    const monthlyInterestRate = parseFloat(interestRate) / 1200;

    if (principal > 0 && timeInMonths > 0 && monthlyInterestRate > 0) {
      const powerFactor = Math.pow(1 + monthlyInterestRate, timeInMonths);
      const emi = (principal * monthlyInterestRate * powerFactor) / (powerFactor - 1);
      setMonthlyEMI(emi.toFixed(2));
    } else {
      setMonthlyEMI('');
    }
  };


  const {t} = useTranslation('global')


  return (
    <div className='mx-auto bg-white select-none max-w-screen-2xl '>
      <div className='flex flex-col justify-center md:space-x-8 md:flex-row md:px-24 md:py-40'>
        <div className='flex flex-col items-center px-8 md:px-0 md:items-start'>
          <div className='mt-8 mb-4 text-black'> {t('emi.message')}</div>
          <div className="flex flex-col items-center justify-center w-full p-5 bg-green-800 border md:flex-row md:flex-wrap ">
            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
              <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>{t('emi1.message')}</div>
            </div>
            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>{t('emi2.message')}</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>{t('emi3.message')}</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-white'>{t('emi4.message')}</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half '>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-center text-white'>{t('emi5.message')}</div>
            </div>

            <div className='flex flex-col items-center justify-center object-cover w-40 p-4 border md:my-8 md:mx-8 h-half'>
            <BsFillPersonFill size={30} className='text-green-400' />
              <div className='text-center text-white'>{t('emi6.message')}</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center my-8 md:items-center'>
          <div className='mb-2 text-center text-black'>{t('emi7.message')}</div>
          <div className="flex items-center p-6 mx-auto bg-green-800 w-half md:h-full md:mt-4 md:px-20">
            <div className='flex flex-col md:flex-col'>
              <div className='text-white ' >{t('emi8.message')}</div>
              <select className='' value={loanType} onChange={handleLoanTypeChange} >
            <option>{t('emi9.message')}</option>
            <option>{t('emi1.message')}</option>
            <option>{t('emi2.message')}</option>
            <option>{t('emi3.message')}</option>
            <option>{t('emi4.message')}</option>
            <option>{t('emi5.message')}</option>
            <option>{t('emi6.message')}</option>
          </select>

              <div  className='text-white '>{t('emi10.message')}</div>
               <input
                type="text"
                className='p-1 border'
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />

              <div className='text-white'>{t('emi11.message')}</div>
          <input type='text' className='p-1 border' value={interestRate}  onChange={(e) => setInterestRate(e.target.value)} />

          <div className='text-white'>{t('emi12.message')}</div>
          <input type='text' className='p-1 border' value={duration} onChange={(e) => setDuration(e.target.value)} />

              <div className='text-white '>{t('emi13.message')}</div>
               {/* Calculate and display EMI here */}
               <button onClick={calculateEMI} className='p-2 mt-2 text-green-800 bg-white rounded-md'>
               {t('emi14.message')}
              </button>
              {monthlyEMI !== '' && (
                <div className='mt-4 text-white'>
                  {t('emi15.message')}{monthlyEMI}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emicalculatorc;