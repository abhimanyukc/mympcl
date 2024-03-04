import React from 'react'

import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Appservicec from '../components/services/Appservicec'
import Combo from '../components/combo'





const Appservice = () => {
  return (
       

    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>

      
      <div className='sticky top-0 left-0 z-50 w-full bg-white '>
     <Combo/>
      </div>
      <Sidebar/>
      <Appservicec/>
     <Footer/>
    </div>
  )
}

export default  Appservice
