import React from 'react'
import RealestateLoanc from '../components/realestateloanc'
import Combo from '../components/combo'
import Footer from '../components/footer'

const RealestateLoan = () => {
      //sample data for loans
      const realEstateLoans = [
        
        {
            image: 'https://i.pinimg.com/564x/f4/87/06/f487066a47c350e4913507c291e6c2cd.jpg',
            title: 'Real Estate Loan',
            description: 'Real Estate Loan',
            route: 'loan/realestateloan'
        },
        {
            image: 'https://i.pinimg.com/564x/3d/ad/b2/3dadb2c797b6a4563c7bb0f0c37c1bbb.jpg',
            title: 'Educational Loan',
            description: 'Educational Loan',
            route: 'loan/educationalloan'
        },
        {
            image:'https://i.pinimg.com/564x/b8/70/39/b8703970871f0b2a88adb098a5732154.jpg',
            title: 'Business Loan',
            description: 'Business Loan',
            route: 'loan/businessloan'
        },
       
       ]
  return (
    <div>
      <Combo/>
         <RealestateLoanc realEstateLoans={realEstateLoans}/>
      <Footer/>
    </div>
  )
}

export default RealestateLoan
