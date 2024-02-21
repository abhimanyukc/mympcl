import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Marque from '../components/marque'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import  Otherbankingservicec from '../components/services/Otherbankingservicec'





const Otherbankingservice = () => {
  return (
       

    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>

      
      <div className='sticky top-0 left-0 z-50 w-full bg-white '>
      <Header/>
      <Nav/>
      <Marque/>
      </div>
      <Sidebar/>
     <Otherbankingservicec/>
     <Footer/>
    </div>
  )
}

export default  Otherbankingservice
