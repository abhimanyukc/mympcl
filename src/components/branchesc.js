import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { BsPhone, BsMailbox } from 'react-icons/bs';

const Branchesc = () => {
  const { t } = useTranslation('global');
   const [branchesData, setBranchesData] = useState([]);
  // Defining an array of objects containing data for each branch
  // const branchesData = [
  //   {
  //     title: t('brnch1.message'),
  //     address: t('brnch2.message'),
  //     phone: t('brnch3.message'),
  //     email: t('brnch4.message'),
  //   },
  //   {
  //     title: t('brnch1.message'),
  //     address: t('brnch5.message'),
  //     phone: t('brnch6.message'),
  //     email: t('brnch7.message'),
  //   },
  //   {
  //     title: t('brnch1.message'),
  //     address: t('brnch8.message'),
  //     phone: t('brnch9.message'),
  //     email: t('brnch10.message'),
  //   },
  //   {
  //     title: t('brnch1.message'),
  //     address: t('brnch11.message'),
  //     phone: t('brnch12.message'),
  //     email: t('brnch13.message'),
  //   },
   
  // ];

  //fetch branch data from api
  useEffect(() => {
    axios.get('http://localhost:5000/api/branches/')
    .then(response => {

      setBranchesData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  }, [])
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="mx-8 mt-10 md:mt-20 ">
        <div className="flex justify-center mb-8 text-2xl font-bold md:justify-start max-w-screen-2xl">{t('brnch.message')}</div>

        <div className="flex flex-col flex-wrap justify-center md:justify-start ">
          {branchesData.map((branch, index) => (
            <div className="flex flex-col md:flex-row" key={index}>
              <div className="flex flex-col justify-center p-2 mb-0 mr-8 text-green-800 border rounded-lg md:mt-4 md:mb-16 md:w-1/2">
                <div className="text-primary">{branch.title}</div>
                <div className="mt-4 ">{branch.address}</div>
                <div className="flex mt-2 ">
                  <div className="text-black ">
                    <BsPhone />
                  </div>
                  <div className="ml-2 text-sm text-nowrap">{branch.phone}</div>
                </div>
                <div className="flex flex-wrap items-center mt-2">
                  <div className="text-black ">
                    <BsMailbox />
                  </div>
                  <div className="ml-2 ">{branch.email}</div>
                </div>
              </div>

              {/* Add your iframe here */}
              <iframe
                title="Web soft"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.86809086942!2d83.97825317606336!3d28.211320003082573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595acf47c0b65%3A0x37d1e590f8a5d50e!2sWebsoft%20Technology%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1708653678963!5m2!1sen!2snp"
                width="80%"
                height="50%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4 mb-10 md:w-1/2 md:h-60"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branchesc;
