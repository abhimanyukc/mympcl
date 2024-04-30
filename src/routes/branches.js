import React  from 'react';
import Branchesc from '../components/branchesc'
import Footer from '../components/footer'

import Nav from '../components/nav'
import Combo from '../components/combo';



const Branches = () => {

  return (
   
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>

      
    <Combo/>
    <Branchesc/>
   <Footer/>
  </div>
  )
}

export default Branches
