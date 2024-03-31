import React from 'react'

import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Careerc from '../components/careerc'
import Combo from '../components/combo'


const Careers = () => {
  return (
    <div>
      <div className='sticky top-0 left-0 z-20 w-full '>
      <Combo/>
      </div>

      <Sidebar/>
     <Careerc/>
 
     <Footer/>
       
    </div>
  )
}

export default Careers
