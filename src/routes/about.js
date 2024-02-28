import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import ContactC from '../components/contact'
import Informationc from '../components/informationc'
import Membershipc from '../components/membershipc'
import Branchesc from '../components/branchesc'

const  About = () => {
  return (
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>

      
    <div className='sticky top-0 left-0 z-50 w-full bg-white '>
    <Header/>
    <Nav/>
    </div>




    <Informationc/>
    <Membershipc/>

    <Branchesc/>
    <ContactC/>
   <Footer/>
  </div>
  )
}

export default  About
