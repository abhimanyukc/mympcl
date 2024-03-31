import React from 'react'
import Branchesc from '../components/branchesc'
import Footer from '../components/footer'
import Combo from '../components/combo'


const Branches = () => {
  return (
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>

      
    <div className='sticky top-0 left-0 z-50 w-full bg-white '>
    <Combo/>
    </div>
    <Branchesc/>
   <Footer/>
  </div>
  )
}

export default Branches
