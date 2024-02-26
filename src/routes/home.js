import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Marque from '../components/marque'
import ImageSlider from '../components/imageslider'
import Sidebar from '../components/sidebar'
import Servicesc from '../components/servicesc'
import Onlineaccountopening from '../components/onlineaccountopening'
import Footer from '../components/footer'

import Account from '../components/account'
import Remittance from '../components/remittance'
import InterestRateComponent from '../components/interestdetails'
import Emicalculatorc from '../components/emicalculatorc'
import ContactC from '../components/contact'
import Informationc from '../components/informationc'
import Membershipc from '../components/membershipc'
import Departmentc from '../components/departmentc'
import Branchesc from '../components/branchesc'




const Home = () => {
  return (
       

    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>

      
      <div className='sticky top-0 left-0 z-50 w-full bg-white '>
      <Header/>
      <Nav/>
      <Marque/>
     
      </div>
      <ImageSlider/>
      <Sidebar/>

     <Servicesc/>
     <Onlineaccountopening/>
     <Account/>
     <Remittance/>
     <InterestRateComponent/>
      <Emicalculatorc/>
      <Informationc/>
      <Membershipc/>
      <Departmentc/>
      <Branchesc/>
      <ContactC/>
     <Footer/>
    </div>
  )
}

export default Home
