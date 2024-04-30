import React from 'react';
import Nav from '../components/nav'

import Footer from '../components/footer'
import InvestmentAdvisor from '../components/investmentadvisor'
import Combo from '../components/combo';


const InvestmentAdvisorRoute = () => {
 
  return (
  
    <div>
         <Combo/>
          <InvestmentAdvisor/>
        <Footer/>
    </div>
  )
}

export default InvestmentAdvisorRoute
