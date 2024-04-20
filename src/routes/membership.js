import React from 'react'
import Membershipc from '../components/membershipc'
import Footer from '../components/footer'
import Nav from '../components/nav'


const Membership = () => {
  return (
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>

      
   <Nav/>

    <Membershipc/>
   <Footer/>
  </div>
  )
}

export default Membership
