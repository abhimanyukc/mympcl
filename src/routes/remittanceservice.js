import React from 'react'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import  RemittanceServicec from '../components/services/RemittanceServicec'
import Combo from '../components/combo'






const Remittanceservice = () => {
  return (
       

    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>

      
      <Combo/>
      <Sidebar/>
     <RemittanceServicec/>
     <Footer/>
    </div>
  )
}

export default  Remittanceservice
