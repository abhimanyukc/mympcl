import React from 'react'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import  Smsbankingservicec from '../components/services/Smsbankingservicec'
import Combo from '../components/combo'





const Smsbankingservice = () => {
  return (
       

    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>

      
      <Combo/>
      <Sidebar/>
      <Smsbankingservicec/>
     <Footer/>
    </div>
  )
}

export default  Smsbankingservice
