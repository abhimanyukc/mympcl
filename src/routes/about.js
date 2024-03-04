import React from 'react'

import Footer from '../components/footer'
import ContactC from '../components/contact'
import Informationc from '../components/informationc'
import Membershipc from '../components/membershipc'
import Branchesc from '../components/branchesc'
import Combo from '../components/combo'


const  About = () => {
  return (
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>   
   <Combo/>




    <Informationc/>
    <Membershipc/>

    <Branchesc/>
    <ContactC/>
   <Footer/>
  </div>
  )
}

export default  About
