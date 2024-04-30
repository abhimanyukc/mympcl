import React from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import BankTeller from '../components/banktellerc'
import Combo from '../components/combo';



const BankTellerRoute = () => {

  return (

    <div>
         <Combo/>
          <BankTeller/>
        <Footer/>
    </div>
  )
}

export default BankTellerRoute
