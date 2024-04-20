import React from 'react'

import Footer from '../components/footer'
import Organizationc from '../components/organizationc'
import Nav from '../components/nav'


const Organization = () => {
  return (
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '> 
    <Nav/>
    <Organizationc/>
   <Footer/>
  </div>
  )
}

export default Organization
