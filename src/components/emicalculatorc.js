import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillPersonFill } from 'react-icons/bs';
import axios from 'axios';

const Emicalculatorc = () => {
  const [loanType, setLoanType] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [monthlyEMI, setMonthlyEMI] = useState('');
  const [loanData, setLoanData] = useState([]);

  // Fetch loan data from API when the component mounts
  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/emiCalculator/'); // Adjust the URL as needed
        setLoanData(response.data);
      } catch (error) {
        console.error('Error fetching loan data:', error);
      }
    };
    
    fetchLoanData();
  }, []);
  
  const handleLoanTypeChange = (e) => {
    const selectedLoanType = e.target.value;
    setLoanType(selectedLoanType);

    const selectedLoan = loanData.find(loan => loan.loanType === selectedLoanType);
    if (selectedLoan) {
      setInterestRate(selectedLoan.interestRate);
      setDuration(selectedLoan.duration);
    } else {
      setInterestRate('');
      setDuration('');
    }
  };

  const calculateEMI = async () => {
    const principal = parseFloat(loanAmount) || 0;
    const timeInMonths = parseFloat(duration) || 0;
    const monthlyInterestRate = parseFloat(interestRate) / 1200;

    if (principal > 0 && timeInMonths > 0 && monthlyInterestRate > 0) {
      const powerFactor = Math.pow(1 + monthlyInterestRate, timeInMonths);
      const emi = (principal * monthlyInterestRate * powerFactor) / (powerFactor - 1);
      setMonthlyEMI(emi.toFixed(2));

      // Send data to backend API
      try {
        await axios.post('http://localhost:5000/api/emicalculator/', {
          loanType,
          loanAmount,
          interestRate,
          duration,
          monthlyEMI: emi.toFixed(2)
        });
      } catch (error) {
        console.error('There was an error saving the EMI data!', error);
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
              <div key={index} className='flex flex-col items-center justify-center object-cover w-40 h-32 p-4 border md:my-8 md:mx-8'>
                <BsFillPersonFill size={30} className='text-green-400' />
                <div className='text-center text-white '>{loan.loanType}</div>
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
                  <option key={index} value={loan.loanType}>{loan.loanType}</option>
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
              <input type='text' className='p-1 border' value={interestRate} readOnly />

              <div className='text-white'>{t('emi12.message')}</div>
              <input type='text' className='p-1 border' value={duration} readOnly />

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
