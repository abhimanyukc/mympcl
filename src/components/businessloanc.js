// import React from 'react'

// const BusinessLoanCard = ({ image, title, description}) => {
//     return(
//         <div className='flex flex-col items-center justify-center p-6 m-4 bg-white rounded-lg shadow-lg'>
//            <img src={image} alt={title} className='w-32 h-32 mb-4 rounded-full' />
//            <p className='text-lg font-semibold text-gray-600'>
//             {description} </p>
//         </div>
//     )
// }

// const BusinessLoanc = ({ businessLoans }) => {
//   return (
//     <div className='px-6 mx-auto max-w-screen-2xl md:px-20'>

//        <div className='flex flex-col md:flex-row'>
         
//          <div className='flex flex-col items-center mt-8'>
//          {/* <img src='https://i.pinimg.com/564x/b8/70/39/b8703970871f0b2a88adb098a5732154.jpg' alt='Business loan' className="w-32 h-32 mb-4 rounded-full " /> */}
//            <div className='flex flex-col items-center '>
//            <img src='https://i.pinimg.com/564x/b8/70/39/b8703970871f0b2a88adb098a5732154.jpg' alt='Business loan' className="w-32 h-32 mb-4 rounded-full " />
//          <div className='text-lg font-semibold md:ml-4'>Business Loan</div>
//          <div className='mt-2 text-xs md:ml-4 font-extralight '>Content not available</div>
          
       
//          <div className='mt-12 font-semibold '>Recent Loans</div> 
//          <div className='mt-12 text-xl font-semibold'>Follow Us On Facebook</div>

//            </div>
        
//          {/*  getting 3 cards form props */}
//                  <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3'>
//                     {businessLoans.map((loan, index) =>(
//                         <BusinessLoanCard
//                         key={index}
//                         image={loan.image}
//                         title={loan.title}
//                         description={loan.description}
//                         />
//                     ) )}
//                  </div>

//          </div>


         
//        </div>
        
      
//     </div>
//   )
// }

// export default BusinessLoanc

import React from 'react'
import { useTranslation } from 'react-i18next'

const BusinessLoanCard = ({ image, title, description}) => {
    return(
        <div className='flex flex-col items-center justify-center p-6 m-4 bg-white rounded-lg shadow-lg'>
           <img src={image} alt={title} className='w-32 h-32 mb-4 rounded-full' />
           <p className='text-lg font-semibold text-gray-600'>
            {description} </p>
        </div>
    )
  }
const BusinessLoanc = ({businessLoans}) => {

  const [t, i18n]  = useTranslation('global')
  return (
    <div className='px-6 mx-auto max-w-screen-2xl md:px-8'>

    <div>
      
      <div className='flex flex-col items-center '>
      <img src='https://i.pinimg.com/564x/f4/87/06/f487066a47c350e4913507c291e6c2cd.jpg' alt='Real Estate loan' className="w-32 h-32 mb-4 rounded-full " />
      <div className='font-semibold'>{t('businessLoan.message')}</div>
      <div className='text-xs '>{t('businessLoan1.message')}</div>
      <div className='font-semibold '>{t('businessLoan2.message')}</div>
      <div className='font-semibold '>{t('businessLoan3.message')}</div> 
      </div>

     

      {/*  getting 3 cards form props */}
              <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3'>
                 {businessLoans.map((loan, index) =>(
                     <BusinessLoanCard
                     key={index}
                     image={loan.image}
                     title={loan.title}
                     description={loan.description}
                     />
                 ) )}
              </div>
      
    </div>
     
   
 </div>
  )
}

export default BusinessLoanc
