import React from 'react'

const RealEstateLoanCard = ({ image, title, description}) => {
    return(
        <div className='flex flex-col items-center justify-center p-6 m-4 bg-white rounded-lg shadow-lg'>
           <img src={image} alt={title} className='w-32 h-32 mb-4 rounded-full' />
           <p className='text-lg font-semibold text-gray-600'>
            {description} </p>
        </div>
    )
  }
const RealestateLoanc = ({realEstateLoans}) => {
  return (
    <div className='px-6 mx-auto max-w-screen-2xl md:px-8'>

    <div>
      
      <div className='flex flex-col items-center '>
      <img src='https://i.pinimg.com/564x/f4/87/06/f487066a47c350e4913507c291e6c2cd.jpg' alt='Real Estate loan' className="w-32 h-32 mb-4 rounded-full " />
      <div className='font-semibold'>Real Estate Loan</div>
      <div className='text-xs '>Content not available</div>
      <div className='font-semibold '>Follow Us On Facebook</div>
      <div className='font-semibold '>Recent Loans</div> 
      </div>

     

      {/*  getting 3 cards form props */}
              <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3'>
                 {realEstateLoans.map((loan, index) =>(
                     <RealEstateLoanCard
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

export default RealestateLoanc
