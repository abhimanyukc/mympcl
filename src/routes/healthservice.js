import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Marque from '../components/marque'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Healthservicec from '../components/services/Healthservicec'
import Combo from '../components/combo'





const Healthservice = () => {
  return (
       

    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>

      
      <Combo/>
      <Sidebar/>
     <Healthservicec/>
     <Footer/>
    </div>
  )
}

export default  Healthservice
