import React  from 'react';

import Footer from '../components/footer'
import Organizationc from '../components/organizationc'
import Nav from '../components/nav'
import Combo from '../components/combo';


const Organization = () => {

  return (
    <>
   
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '> 
    <Combo/>
    <Organizationc/>
   <Footer/>
  </div>
     
     </>
  )
}

export default Organization
