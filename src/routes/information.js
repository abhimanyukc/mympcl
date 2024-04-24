import React  from 'react';

import Informationc from '../components/informationc'
import Footer from '../components/footer'
import Nav from '../components/nav'



const Information = () => {

  return (
  
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>

      
       <Nav/>

    <Informationc/>
   <Footer/>
  </div>

  )
}

export default Information

