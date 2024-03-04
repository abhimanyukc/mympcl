import React from 'react'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import  Mobilebankingservicec from '../components/services/Mobilebankingservicec'
import Combo from '../components/combo'





const Mobilebankingservice = () => {
  return (
       

    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>

      
      <Combo/>
      <Sidebar/>
     <Mobilebankingservicec/>
     <Footer/>
    </div>
  )
}

export default  Mobilebankingservice
