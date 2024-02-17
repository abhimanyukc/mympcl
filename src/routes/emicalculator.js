import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Marque from '../components/marque'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import Emicalculatorc from '../components/emicalculatorc'



const Emicalculator = () => {
  return (
    <div className=''>
      
      <div className='sticky top-0 left-0 z-20 w-full'>
      <Header/>
      <Nav/>
      <Marque/>
      </div>  
      <Sidebar/>
       <Emicalculatorc/>
     <Footer/>
    </div>
  )
}

export default Emicalculator
