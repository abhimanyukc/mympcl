import React from 'react'
import Nav from '../components/nav'

import Footer from '../components/footer'
import InvestmentAdvisor from '../components/investmentadvisor'

const InvestmentAdvisorRoute = () => {
  return (
    <div>
      <Nav/>
          <InvestmentAdvisor/>
        <Footer/>
    </div>
  )
}

export default InvestmentAdvisorRoute
