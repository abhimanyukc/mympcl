//emicalculatorc.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillPersonFill } from 'react-icons/bs';
import axios from 'axios'; //Import axios for API calls
const Emicalculatorc = () => {
  const [loanType, setLoanType] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [monthlyEMI, setMonthlyEMI] = useState('');

  const loanData = [
    { type: 'Agriculture Loan', interestRate: '15.00', duration: '12' },
    { type: 'Business Loan', interestRate: '16.00', duration: '12' },
    { type: 'Emergency Loan', interestRate: '13.00', duration: '12' },
    { type: 'Educational Loan', interestRate: '15.00', duration: '12' },
    { type: 'Foreign Employment Loan', interestRate: '16.00', duration: '12' },
    { type: 'Hire Purchase Loan', interestRate: '16.00', duration: '12' },
  ];

 

  const handleLoanTypeChange = (e) => {
    const selectedLoanType = e.target.value;
    setLoanType(selectedLoanType);
    
    const selectedLoan = loanData.find(loan => loan.type === selectedLoanType);
    if (selectedLoan) {
      setInterestRate(selectedLoan.interestRate);
      setDuration(selectedLoan.duration);
    } else {
      setInterestRate('');
      setDuration('');
    }
  };

  const calculateEMI =  async () => {
    const principal = parseFloat(loanAmount) || 0;
    const timeInMonths = parseFloat(duration) || 0;
    const monthlyInterestRate =  parseFloat(interestRate) / 1200;
     //r = monthly interest rate = parseFloat(interestRate) / 1200;
     //n = no of months
    //powerFactor = (1+r)^n
    //emi (p*r* (1+r)^n)/((1+r)^n-1)
    if (principal > 0 && timeInMonths > 0 && monthlyInterestRate > 0) {
      const powerFactor = Math.pow(1 + monthlyInterestRate, timeInMonths);
      const emi = (principal * monthlyInterestRate * powerFactor) / (powerFactor - 1);
    //  the state monthlyEMI with the calculated EMI value, rounded to two decimal places using toFixed(2)
      setMonthlyEMI(emi.toFixed(2));

      //send data to backend API
      try{
           await  axios.post('http://localhost:5000/api/emicalculator/', {
                loanType,
                loanAmount,
                interestRate,
                duration,
                monthlyEMI: emi.toFixed(2)
           })
      }  catch (error) {
          console.error("There was an error saving the EMI data!", error);
      }
    } else {
      setMonthlyEMI('');
    }
  };

  const { t } = useTranslation('global');

  return (
    <div className='mx-auto bg-white select-none max-w-screen-2xl'>
      <div className='flex flex-col justify-center md:space-x-8 md:flex-row md:px-8 md:py-10'>
        <div className='flex flex-col items-center px-8 md:px-0 md:items-start'>
          <div className='mt-8 mb-4 text-3xl font-semibold text-black'>{t('emi.message')}</div>
          <div className="flex flex-col items-center w-full p-5 bg-green-800 border md:flex-row md:flex-wrap">
            {loanData.map((loan, index) => (
              //The key attribute is used by React to uniquely identify each element in the list.the index of the item in the array is used as the key.
              <div key={index} className='flex flex-col items-center justify-center object-cover w-40 h-32 p-4 border md:my-8 md:mx-8'>
                <BsFillPersonFill size={30} className='text-green-400' />
                <div className='text-center text-white '>{t(`emi${index + 1}.message`)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col justify-center my-8 md:items-center'>
          <div className='mb-2 text-xl font-normal text-center text-black'>{t('emi7.message')}</div>
          <div className="flex items-center p-6 mx-auto bg-green-800 w-half md:h-full md:mt-4 md:px-20">
            <div className='flex flex-col md:flex-col'>
              <div className='text-white'>{t('emi8.message')}</div>
              <select className='' value={loanType} onChange={handleLoanTypeChange}>
                <option value="">{t('emi9.message')}</option>
                {loanData.map((loan, index) => (
                  <option key={index} value={loan.type}>{t(`emi${index + 1}.message`)}</option>
                ))}
              </select>

              <div className='text-white'>{t('emi10.message')}</div>
              <input
                type="text"
                className='p-1 border'
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />

              <div className='text-white'>{t('emi11.message')}</div>
              <input type='text' className='p-1 border' value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />

              <div className='text-white'>{t('emi12.message')}</div>
              <input type='text' className='p-1 border' value={duration} onChange={(e) => setDuration(e.target.value)} />

              <div className='text-white'>{t('emi13.message')}</div>
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
