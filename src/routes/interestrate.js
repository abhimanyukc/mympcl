import React from 'react'
import Interestrates from '../components/interestdetails'
import Header from '../components/header'
import Nav from '../components/nav'
import Marque from '../components/marque'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

const Interestrate = () => {
  return (
    <div>
      <div className='sticky top-0 left-0 z-20 w-full '>
      <Header/>
      <Nav/>
      <Marque/>
      </div>
      <Sidebar/>
      <Interestrates/>
 
     <Footer/>
       
    </div>
  )
}

export default Interestrate
