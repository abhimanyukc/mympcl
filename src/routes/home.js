import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Marque from '../components/marque'
import ImageSlider from '../components/imageslider'
import Servicesc from '../components/servicesc'
import Onlineaccountopening from '../components/onlineaccountopening'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import Account from '../components/account'
import Remittance from '../components/remittance'



const Home = () => {
  return (
    <div className=''>
      
      <div className='sticky top-0 left-0 z-20 w-full'>
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
     <Footer/>
    </div>
  )
}

export default Home
