import React from 'react'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import InternetBankingServicec from '../components/services/InternetBankingServicec'
import Combo from '../components/combo'





const Internetservice = () => {
  return (
       

    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>

      
    <Combo/>
      <Sidebar/>
      <InternetBankingServicec/>
     <Footer/>
    </div>
  )
}

export default  Internetservice
