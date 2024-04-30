import React  from 'react';

import Footer from '../components/footer'

import Combo from '../components/combo';
import Remittancec from '../components/remittance';


const Remittance = () => {

  return (
    <>
   
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '> 
    <Combo/>
    <Remittancec/>
   <Footer/>
  </div>
     
     </>
  )
}

export default Remittance
