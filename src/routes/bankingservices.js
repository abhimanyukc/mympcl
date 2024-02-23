import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Marque from '../components/marque'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Bankingservices from '../components/services/Bankingservicec'





const Bankingservicesr = () => {
  return (
       

    <div className='text-base leading-6 tracking-normal bg-white  text-3d3d3d text-start'>

      
      <div className='sticky top-0 left-0 z-50 w-full bg-white '>
      <Header/>
      <Nav/>
      <Marque/>
      </div>
      <Sidebar/>
      <Bankingservices/>
     <Footer/>
    </div>
  )
}

export default Bankingservicesr
