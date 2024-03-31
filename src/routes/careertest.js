import React from 'react'

import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

import Combo from '../components/combo'
import Careertest from '../components/career'


const Careerstest = () => {
  return (
    <div>
      <div className='sticky top-0 left-0 z-20 w-full '>
      <Combo/>
      </div>

      <Sidebar/>

     <Careertest/>
     <Footer/>
       
    </div>
  )
}

export default Careerstest
